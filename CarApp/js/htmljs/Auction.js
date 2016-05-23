var buyer_id = null;
var loaded_sold_cars = {};
var loaded_my_bid_cars = {};

$(function () {

    DrawPage();
    DbLogin().done(function () {
        AutoLogin().done(function (users) {
            buyer_id = users[0].id;
            db.save('user(' + buyer_id + ')', {
                id: buyer_id,
                collections: [{ id: 'car_buyer' }],
            }).done(
            function (data) {

            }).always(function () {

            });

            FillCarList();
            FillTradeHistory();
        });
    });

    $('#btn_refresh').click(function () { FillCarList(); });


    //$('#account_tabs a[href="#account_bids"]').tab('show');

})

function FillCarList()
{
    ShowLoading('body');
    db.load('car', { filter: 'auction_step eq 1', expand: 'bids,images_main,schemeparts' }).done(
    function (carlist) {
        var carlist = Auction.ProcessCarList(carlist, buyer_id);
        FillCarList_html(carlist);
        FillMyBids();
    }).always(function () {
        HideLoading('body');
    });

}

var last_loaded_cars = {};

function FillCarList_html(carlist)
{
    if (carlist_timers_timer) clearTimeout(carlist_timers_timer);

    var car_cnt = 0;
    $('#car_list_area').html('');
    var row_templ = $('#car_row_template').html();

    for (var i in carlist)
    {
        var car = carlist[i];
        var time_left_sec = car.time_left_sec;
        car_cnt++;
        var car_row = $('<div class="row car-row">' + row_templ + '</div>');
        $('#car_list_area').append(car_row);
        car_row.attr('data-car-id', car.id);

        car_row.find('.car_data_row1').html(my_undefined(car['main.Model_mark']) + ' ' + my_undefined(car['main.Model']) + ' ' + my_undefined(car['main.Year']))
        car_row.find('.car_data_row2').html(my_undefined(car['main.Modification']) + ' ' + my_undefined(car['main.Drivetrain']) + ' ' + my_undefined(car['main.Engine_type']))

        //car_row.find('.car_data_row1').click(function () {
        //    ShowCarDetails($(this).parents('.car-row').attr('data-car-id'));
        //});
        car_row.find('.car_data_row1').parent('a').attr('href', 'CarDetails.html?carid=' + car.id)

        UpdateCarRowBid(car, car_row);

        car_row.find('.time_left').html(FormatTimeLeft(time_left_sec)).attr('data-car-id', car.id);
        var end_time = moment().add(time_left_sec);
        car_row.find('.end_time').html('Время завершения: ' + end_time.format('lll'));

        car_row.find('.btn-add-bid').attr('data-car-id', car.id)
            .click(function () {
                AddBid($(this).attr('data-car-id'));
            });

        if (car.images_main && car.images_main.length > 0)
        {
            car_row.find('.car-image-thumbnail').css('background-image', 'url(' + ImgUrl(car.images_main[0].filename) + ')')
        }
        
    }

    if (car_cnt == 0) {
        $('#car_list_area').prepend('<p class="lead">На данный момент на аукцион не выставлено ни одного автомобиля.</p>');
    } else
    {
        //$('#car_list_area').prepend('<p class="lead">Аукцион автомобилей</p>');
    }

    carlist_timers_timer = setInterval(RefreshCarListTimers, 1000);
    carlist_reload_timer = setInterval(ReloadCarList, 6000);
    //$('#car_list_area').html(html);
}


var carlist_timers_timer = null;
var carlist_reload_timer = null;
function RefreshCarListTimers()
{
    $('#car_list_area').find('.time_left').each(function () {
        var car = last_loaded_cars[$(this).attr('data-car-id')];
        var time_left_sec = CalculateTimeLeft(car);
        if (time_left_sec >= 0) {
            $(this).html(FormatTimeLeft(time_left_sec));
            var end_time = moment().add(time_left_sec);
            $(this).parents('.car-row').find('.end_time').html('Время завершения: ' + end_time.format('lll'));
        } else
        {
            $(this).parents('.car-row').remove();
        }
    });

}

function UpdateCarRowBid(car, car_row)
{
    var max_bid = car.max_bid;
    var summ_frm = numeral(max_bid.value).format('0,0[.]00') + '₽';
    if (max_bid.value == 1 || car.has_my_bids == false) {
        car_row.find('.max_bid').html(summ_frm);
    } else {
        var html00 = '';
        if (max_bid.buyers[0].id == buyer_id) {
            html00 += '<div class="col-lg-12 bg-success">';
            html00 += summ_frm + '<br/>' + 'Вы выигрываете!';
            html00 += '</div>';
        } else {
            html00 += '<div class="col-lg-12 bg-danger">';
            html00 += summ_frm + '<br/>' + 'Вы проигрываете!';
            html00 += '</div>';
        }
        car_row.find('.max_bid').html(html00);
    }
}

var ReloadBids_fails = 0;
function ReloadCarList()
{
    db.load('car', { filter: 'auction_step eq 1', expand: 'bids,images_main,schemeparts' }).done(
    function (carlist) {
        
        var carlist = Auction.ProcessCarList(carlist, buyer_id);

        $('.car-row').each(function () {
            var row = $(this);
            var car = last_loaded_cars[row.attr('data-car-id')];
            if (car)
            {
                UpdateCarRowBid(car, row);
            } else
            {
                row.remove();
            }
        });

    }).fail(function () {

        $.notify({
            message: 'Не удалось обновить ставки. Возможно отсутствует соединение с сервером.',
        }, {
            type: 'danger',
            delay: 3000,
        });

        if (ReloadBids_fails == 0) {
            ReloadBids_fails++;
            //alert('Не удалось обновить ставки. Возможно отсутствует соединение с сервером.');

            ReloadBids_fails--;       
        }
    });
}




function AddBid(car_id)
{
    var html = '';

    var car = last_loaded_cars[car_id];

    var min_bid = 0;
    min_bid = Math.max(car.max_bid.value*1.05, 1000);
    min_bid = min_bid % 1000 == 0 ? min_bid : min_bid + (1000 - min_bid % 1000);

    html += '<div>'
    html += '<p class="lead">Минимальная ставка: ' + min_bid + '₽ </p>';
    html += '<div class="form-group col-lg-12"><label class="col-xs-12 control-label">Ваша ставка: </label><div class="col-xs-5"><input class="col-xs-5 bid_value form-control input-lg" value="' + min_bid + '"/></div></div>'
    html += '<div style="height:20px"></div><span class="btn btn-danger add_bid_ok">Сделать ставку</span>';
    html += '</div>';

    var dialog;
    var on_shown = function () {
        
    };

    var on_close_dlg = function (dialog) {

    };
    dialog = ShowTmpDialog("Новая ставка", html, on_shown, on_close_dlg);

    dialog.elem.find('.add_bid_ok').click(function () {
        var bid_value = dialog.elem.find('.bid_value').val();

        if (isNaN(bid_value)) {
            alert('Введеное значение "' + bid_value + '" не является числом. Ставка не сделана.');
            return;
        }

        if (bid_value < min_bid) {
            alert('Введеное значение "' + bid_value + '" меньше чем минимальная ставка. Ставка не сделана.');
            return;
        }

        ShowLoading('body');
        var data = {
            id: car.id,
            bids: [{
                value: bid_value,
                dt: new Date(),
                buyers: [{ id: buyer_id, collections: [{ "id": "car_buyer" }], }],
                collections: [{ "id": "car_bid" }]
            }],
        }
        db.save('car', data).done(
        function (data) {
            dialog.close();
            alert('Ваша ставка принята.');
            FillCarList();
        }).always(function () {
            HideLoading('body');
        });
    });
}

function ShowCarDetails(car_id)
{
    var html = '';

    var car = last_loaded_cars[car_id];

    html += $('#car_details_template').html();
    var dialog;
    var on_shown = function () {
        
    };

    var on_close_dlg = function (dialog) {
        dialog.elem.remove(); //clean up
    };

    dialog = ShowTmpDialog("Сведения об автомобиле", html, on_shown, on_close_dlg);

    var cnt = dialog.elem;
    FillCarForm(cnt, car);


}

function ShowCarDetails_mybids(car_id)
{
    var html = '';

    var car = loaded_my_bid_cars[car_id];

    html += $('#car_details_template').html();
    var dialog;
    var on_shown = function () {
        var cnt = dialog.elem;
        FillCarForm(cnt, car);

    };

    var on_close_dlg = function (dialog) {
        dialog.elem.remove(); //clean up
    };

    dialog = ShowTmpDialog("Сведения об автомобиле", html, on_shown, on_close_dlg);

}

function FillTradeHistory()
{
    ShowLoading('#account_trade_hist');
    db.load('car', { filter: 'trades/buyer eq \'' + buyer_id + '\'', expand: 'trades,images_main,schemeparts' }).done(
    function (carlist) {
        FillTradeHistory_html(carlist);
    }).always(function () {
        HideLoading('#account_trade_hist');
    });

}

function FillTradeHistory_html(carlist)
{
    var cnt = $('#account_trade_hist_area');
    cnt.html('');
    loaded_sold_cars = {};
    if (carlist.length == 0)
    {
        cnt.append('<p class="lead text-danger">Вы еще не сделали ни одной покупки</p>');
    }
    for (var i in carlist)
    {
        var car = carlist[i];
        var trade = car.trades[0];
        //var buyer = trade.buyer[0];
        loaded_sold_cars[car.id] = car;

        var car_row = $($('#car_row_sold_template').html());

        if (car.images_main && car.images_main.length > 0) {
            car_row.find('.car-image-thumbnail').css('background-image', 'url(' + ImgUrl(car.images_main[0].filename) + ')')
        }

        car_row.attr('data-car-id', car.id);
        var car_model = my_undefined(car['main.Model_mark']) + ' ' + my_undefined(car['main.Model']);
        if (car_model == ' ') {
            car_model = '[Безымянный автомобиль]';
        }
        //onclick="ShowCarDetails_4sold(\'' + car.id + '\')"
        car_row.find('.car_data_row1').html('<a href="CarDetails.html?carid=' + car.id + '" target="_blank"><span>' + car_model + ' ' + my_undefined(car['main.Year']) + '</span></a>');
        car_row.find('.car_data_row2').html(my_undefined(car['main.Modification']) + ' ' + my_undefined(car['main.Drivetrain']) + ' ' + my_undefined(car['main.Engine_type']))

        car_row.find('.auct_end_dt').html('Дата продажи: ' + moment(car.trades[0].dt).format('lll') + '');

        //car_row.find('.car_buyer_name').html('Покупатель: ' + my_undefined(buyer.name) + ' (тел: ' + my_undefined(buyer.phone) + ')');
        car_row.find('.trade_summ').html('Цена: <strong>' + numeral(car.trades[0].price).format('0,0[.]00') + ' ₽</strong>');
        cnt.append(car_row);
    }

}


function ShowCarDetails_4sold(car_id) {
    var car = loaded_sold_cars[car_id];
    var html = '';


    html += $('#car_details_template').html();
    var dialog;
    var on_shown = function () {
        var cnt = dialog.elem;
        FillCarForm(cnt, car);

    };

    var on_close_dlg = function (dialog) {
        dialog.elem.remove(); //clean up
    };

    dialog = ShowTmpDialog("Сведения об автомобиле", html, on_shown, on_close_dlg);
}

function Login()
{
    var html = $('#login_form_teample').html();


    var dialog;
    var on_shown = function () {
        var cnt = dialog.elem;
        cnt.find('.btn-cancel').click(function() {
            dialog.close();
        })
        cnt.find('.btn-login').click(function () {

            ShowLoading('body');
            var login = cnt.find('[name=username]').val();
            var pwd = cnt.find('[name=password]').val();

            db.load('car_buyer', { filter: '(username eq \'' + login + '\') and (pwd eq \'' + pwd + '\')' })
            .done(function (buyers) {
                if (buyers.length == 0)
                {
                    alert('Введена неверная пара имя пользователя/пароль');
                } else
                {
                    localStorage['new_buyer_id'] = buyers[0].id;
                    location.reload();
                }
            })
            .fail(function () {
                alert('Введена неверная пара имя пользователя/пароль');
            })
            .always(function () {
                HideLoading('body');
            })

        })
    };

    var on_close_dlg = function (dialog) {
        dialog.elem.remove(); //clean up

    };

    dialog = ShowTmpDialog("Вход в Систему", html, on_shown, on_close_dlg);

}

function Logout()
{
    delete localStorage['new_buyer_id'];
    location.reload();
}

function FillMyBids()
{
    ShowLoading('#account_bids');
    db.load('car', { filter: '(bids/buyers eq \'' + buyer_id + '\')', expand: 'bids,images_main,schemeparts' }).done(
    function (carlist) {
        //var carlist = Auction.ProcessCarList(carlist, buyer_id);
        for (var i in carlist)
        {
            var car = carlist[i];
            Auction.ProcessCar(car, buyer_id);
        }
        FillMyBids_html(carlist);
        
    }).always(function () {
        HideLoading('#account_bids');
    });
}

function FillMyBids_html(cars)
{

    /* Part 1: fill played cars */
    var cnt = $('#account_my_bids');
    cnt.html('');
    loaded_my_bid_cars = {};
    for (var i in cars)
    {
        var car = cars[i];
        if (car.has_my_bids && car.auction_step == 1)
        {
            loaded_my_bid_cars[car.id] = car;
            var my_max_bid = car.buyers2bids[buyer_id];
            for (var b in car.bids)
            {
                var bid = car.bids[b];
                if (bid.buyers[0].id == buyer_id && bid.value > my_max_bid.value)
                {
                    my_max_bid = bid;
                }
            }

            var car_row = $($('#car_row_my_bid_template').html());

            if (car.images_main && car.images_main.length > 0) {
                car_row.find('.car-image-thumbnail').css('background-image', 'url(' + ImgUrl(car.images_main[0].filename) + ')')
            }

            car_row.attr('data-car-id', car.id);
            var car_model = my_undefined(car['main.Model_mark']) + ' ' + my_undefined(car['main.Model']);
            if (car_model == ' ') {
                car_model = '[Безымянный автомобиль]';
            }
            car_row.find('.car_data_row1').html('<a href="CarDetails.html?carid=' + car.id + '" target="_blank"><span>' + car_model + ' ' + my_undefined(car['main.Year']) + '</span></a>');
            car_row.find('.car_data_row2').html(my_undefined(car['main.Modification']) + ' ' + my_undefined(car['main.Drivetrain']) + ' ' + my_undefined(car['main.Engine_type']))

            var time_left = CalculateTimeLeft(car);
            car_row.find('.trade_summ').html('Ваша ставка: <strong>' + numeral(my_max_bid.value).format('0,0[.]00') + ' ₽</strong>');
            if (time_left >= 0)
            {  
                if (my_max_bid.id == car.max_bid.id) {
                    car_row.find('.bid_status').html('<span class="bg-success">Вы выигрываете</span>');
                } else {
                    car_row.find('.bid_status').html('<span class="bg-danger">Вы проигрываете</span>  <p class="text-danger">Макс. ставка: ' + numeral(car.max_bid.value).format('0,0[.]00') + '₽</p>');
                }
            } else
            {
                if (my_max_bid.id == car.max_bid.id) {
                    car_row.find('.bid_status').html('<span class="bg-success">Аукцион завершен. Вы победили.</span><br/>Ожидание решения менеджера.');
                } else {
                    car_row.find('.bid_status').html('<span class="bg-danger">Аукцион завершен. Вы проиграли.</span>  <p class="text-danger">Макс. ставка: ' + numeral(car.max_bid.value).format('0,0[.]00') + '₽</p>');
                }
            }

            cnt.append(car_row);

        }
    }

    /* Part 2: fill ended auction bids */



}