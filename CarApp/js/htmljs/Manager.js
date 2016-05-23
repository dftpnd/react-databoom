var update_bids_timer = null;
var loaded_buyers;
var loaded_cars;
var loaded_sold_cars;
//var manager_id;

$(function () {
    DrawPage();
    DbLogin().done(function () {
        AutoLogin().done(function () {
            FillData();

        });
    });
})

function FillData()
{
    var promises = [];

    var carlist;
    var buyers;

    ShowLoading('body');
    promises.push(
      db.load('car', { filter: 'auction_step eq 1', expand: 'bids,images_main' }).done(
        function (data) {
            carlist = data;
        }).fail(function () {
            alert('Произошла ошибка при загруке "car"');
        })      
    );
    promises.push(
      db.load('car_buyer').done(
        function (data) {
            buyers = data;
        }).fail(function () {
            alert('Произошла ошибка при загруке "car_buyer"');
        })      
    );
    
    WhenAll(promises).done(function() {
        
        var buyers_dict = {};
        for (var i in buyers) {
            buyers_dict[buyers[i].id] = buyers[i];
            buyers[i].games = [];
        }
        loaded_buyers = buyers_dict;

        loaded_cars = {};
        for (var i in carlist) {
            loaded_cars[carlist[i].id] = carlist[i];
        }

        FillClientsList_html(carlist, buyers);
        FillFinishedAuctions(carlist, buyers);

    }).always(function() {
        HideLoading('body');
    });
}


function FillClientsList_html(cars, buyers)
{
    if (update_bids_timer != null)
    {
        clearInterval(update_bids_timer);
    }

    var cars = Auction.ProcessCarList(cars);
    for (var i in cars)
    {
        var car = cars[i];
        if (car.buyers2bids)
        {
            for (var buyer_id in car.buyers2bids)
            {
                var buyer = loaded_buyers[buyer_id];
                var buyer_bid = car.buyers2bids[buyer_id];
                buyer.games.push({
                    car: car,
                    bid: buyer_bid,
                    is_max: buyer_bid.id == car.max_bid.id,
                });
            }
        }
    }

    buyers.sort(function (a, b) {
        if (a.name == undefined)
        {
            a.name = '';
        }
        if (b.name == undefined) {
            b.name = '';
        }
        return (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0;
    });


    var html = '';

    html += '<table class="table table-hover">';
    html += '<thead>';
    html += '<th>Клиент</th><th>Играет</th><th>Телефон</th><th>Почта</th><th>Организация</th>';
    html += '</thead>';
    html += '<tbody style="text-align:center">';
    for (var i in buyers)
    {
        var buyer = buyers[i];
        html += '<tr>';
        html += '<td style="text-align:left;white-space: nowrap;"><a href="javascript:void(0)" onclick="EditClient(\'' + buyer.id + '\')"><i class="fa fa-pencil-square-o"></i></a> ' + my_undefined(buyer.name) + '</td>';
        html += '<td style="text-align:center"><a href="javascript:void(0)" onclick="ShowClientGames(\'' + buyer.id + '\')"><b>' + my_undefined(buyer.games.length) + '</b> <i class="fa fa-external-link"></i></a></td>';
        html += '<td>' + my_undefined(buyer.phone) + '</td>';
        html += '<td>' + my_undefined(buyer.email) + '</td>';
        html += '<td>' + my_undefined(buyer.company) + '</td>';
        html += '</tr>';
    }
    html += '</tbody>';
    html += '</table>';

    $('#my_clients_area').html(html);

    /* Fill notified bids */
    notified_bids_dict = {};
    for (var i in cars)
    {
        var car = cars[i];
        for (var j in car.bids)
        {
            notified_bids_dict[car.bids[j].id] = 1;
        }
    }
    update_bids_timer = setInterval(LoadAndNofityAboutNewClienBids, 10000);
}

var notified_bids_dict = {};

function LoadAndNofityAboutNewClienBids()
{
    db.load('car', { filter: 'auction_step eq 1', expand: 'bids,images_main' }).done(function (carlist) {

        var bids_to_notify = [];
        var carlist = Auction.ProcessCarList(carlist);
        for (var i in carlist)
        {
            var car = carlist[i];
            for (var j in car.bids)
            {
                var bid = car.bids[j];
                if (notified_bids_dict[bid.id] == undefined)
                {
                    bids_to_notify.push(bid);
                    notified_bids_dict[bid.id] = 1;
                    bid.car = car;
                }
            }
        }
        bids_to_notify.sort(function (a,b) {
            return (a.dt > b.dt) ? 1 : (a.dt < b.dt) ? -1 : 0;
        });

        for (var i in bids_to_notify)
        {
            var bid = bids_to_notify[i];
            var buyer = loaded_buyers[bid.buyers[0].id];
            if (buyer) //in case new buyer loaded_buyers can be outdated
            {
                var html = '' + my_undefined(buyer.name) + ' (Компания: "' + my_undefined(buyer.company) + '")';

                $.notify({
                    
                    title: "<strong>Новая ставка!</strong> ",
                    message: 'Клиент ' + html + ' сделал(а) ставку: ' + bid.value + '₽ на автомобиль ' + CarHead(bid.car),
                    //type: 'danger'
                    
                }, {
                    type: 'success',
                    animate: {
                        enter: 'animated bounceInDown',
                        exit: 'animated bounceOutUp'
                    },
                    delay: 20000,
                });
            }

        }

    }).fail(function () {
        $.notify({
            message: 'Не удалось обновить ставки. Возможно отсутствует соединение с сервером.',
        }, {
            type: 'danger',
            delay: 3000,
        });
    });
}

function EditClient(buyer_id)
{
    var buyer = loaded_buyers[buyer_id];

    var html = $('#client_form_template').html();

    var dialog;
    var on_shown = function () {
        var cnt = dialog.elem;

        cnt.find('[data-field]').each(function () {
            var fld = $(this);
            var fldname = fld.attr('data-field');
            if (buyer[fldname])
            {
                fld.val(buyer[fldname]);
            }
        });

        cnt.find('.btn-close').click(function () { dialog.close() });
        cnt.find('.btn-save').click(function () {
           
            var save_data = { id: buyer_id };
            cnt.find('[data-field]').each(function () {
                var fld = $(this);
                var fldname = fld.attr('data-field');
                var value = fld.val();
                if (value)
                {
                    save_data[fldname] = value;
                }

            });

            ShowLoading('body');
            db.save('car_buyer', save_data).done(function () {
                HideLoading('body');
                FillData();
            }).fail(function () {
                HideLoading('body');
                alert('Ошибка подключения к базе данных');
            });

        });
    };

    var on_close_dlg = function (dialog) {

    };

    dialog = ShowTmpDialog("Сведения о клиенте", html, on_shown, on_close_dlg);
}

function ShowClientGames(buyer_id)
{
    var buyer = loaded_buyers[buyer_id];

    var html = '<div class="dlg-all-container"><span class="btn btn-info pull-right btn-refresh">Обновить <i class="fa fa-refresh"></i></span>';
    html += '<span class="lead">Клиент: ' + my_undefined(buyer.name) + '</span><br/><span>' + my_undefined(buyer.company) + ', тел: ' + my_undefined(buyer.phone) + ', email: ' + my_undefined(buyer.email) + '</span>'

    html += '<div class="client-games-area"><div style="height:200px"></div></div></div>';

    var dialog;
    var on_shown = function () {
        var cnt = dialog.elem.find('.dlg-all-container');
        FillClientGames(cnt.find('.client-games-area'), buyer, function () {
            HideLoading(cnt);
        });

        cnt.find('.btn-refresh').click(function () {
            ShowLoading(cnt);
            FillClientGames(cnt.find('.client-games-area'), buyer, function () {
                HideLoading(cnt);
            });
        });
        

    };
    var on_close_dlg = function (dialog) {

    };
    dialog = ShowTmpDialog("Аукцион клиента", html, on_shown, on_close_dlg);
    ShowLoading(dialog.elem.find('.dlg-all-container'));
}


function FillClientGames(container, buyer, after_fill)
{
    var car_cnt = 0;
    db.load('car', { filter: 'auction_step eq 1', expand: 'bids,images_main' }).done(
      function (carlist) {
          var carlist = Auction.ProcessCarList(carlist, buyer.id);
          container.html('');
          container.append('<div style="margin-top:20px">Данные на момент ' + moment().format('HH:mm:ss') + '</div>')
          var row_templ = $('#car_row_template').html();
          for (var i in carlist)
          {
              var car = carlist[i];
              if (car.has_my_bids)
              {
                  car_cnt++;
                  var car_row = $('<div class="row car-row">' + row_templ + '</div>');
                  container.append(car_row);
                  car_row.attr('data-car-id', car.id);

                  var car_model = my_undefined(car['main.Model_mark']) + ' ' + my_undefined(car['main.Model']);
                  if (car_model == ' ') {
                      car_model = '[Безымянный автомобиль]';
                  }
                  car_row.find('.car_data_row1').html('<a href="CarDetails.html?carid=' + car.id + '" target="_blank"><span>' + car_model + ' ' + my_undefined(car['main.Year']) + '</span></a>');
                  car_row.find('.car_data_row2').html(my_undefined(car['main.Modification']) + ' ' + my_undefined(car['main.Drivetrain']) + ' ' + my_undefined(car['main.Engine_type']))

                  car_row.find('.car_data_row1').click(function () {
                      //ShowCarDetails($(this).parents('.car-row').attr('data-car-id'));
                  });

                  FillClientCarRowBid(car, car_row, buyer);

                  car_row.find('.time_left').html(FormatTimeLeft(car.time_left_sec)).attr('data-car-id', car.id);

                  if (car.images_main && car.images_main.length > 0) {
                      car_row.find('.car-image-thumbnail').css('background-image', 'url(' + ImgUrl(car.images_main[0].filename) + ')')
                  }

                  car_row.find('.client_bid_area').html('Максимальная ставка: <b>' + car.max_bid.value + '₽</b>');

              }
          }

          if (car_cnt == 0)
          {
              container.append('<p class="lead text-danger">На данный момент у клиента нет открытых аукционов.</p>');
          }

      }).fail(function () {
          alert('Произошла ошибка при загруке "car"');
      }).always(function () {
          if (after_fill)
          {
              after_fill();
          }
      });
}


function FillClientCarRowBid(car, car_row, buyer) {
    var max_bid = car.max_bid;
    if (max_bid.value == 1 || car.has_my_bids == false) {
        car_row.find('.max_bid').html(max_bid.value + '₽');
    } else {
        var client_bid = car.buyers2bids[buyer.id];
        var html00 = '';
        if (max_bid.buyers[0].id == buyer.id) {
            html00 += '<div class="col-lg-12 bg-success">Ставка клиента: ';
            html00 += client_bid.value + '₽<br/>' + 'Клиент выигрывает!';
            html00 += '</div>';
        } else {
            html00 += '<div class="col-lg-12 bg-danger">Ставка клиента: ';
            html00 += client_bid.value + '₽<br/>' + 'Клиент проигрывает!';
            html00 += '</div>';
        }
        car_row.find('.max_bid').html(html00);
    }
}



function FillFinishedAuctions(cars, buyers)
{
    var cnt = $('#auction_end_list_area');
    cnt.html('');
    var carlist = [];
    for (var i in cars)
    {
        var car = cars[i];
        Auction.ProcessCar(car);
        var time_left = CalculateTimeLeft(car);
        if (time_left < 0)
        {
            car.time_left = time_left;
            carlist.push(car);
        }
    }

    //order by date of maxbid
    carlist.sort(function (a, b) {
        return (a.max_bid.dt > b.max_bid.dt) ? 1 : (a.max_bid.dt < b.max_bid.dt) ? -1 : 0;
    });

    for (var i in carlist)
    {
        var car = carlist[i];
        var car_row = $($('#car_row_endtrade_template').html());

        if (car.images_main && car.images_main.length > 0) {
            car_row.find('.car-image-thumbnail').css('background-image', 'url(' + ImgUrl(car.images_main[0].filename) + ')')
        }

        car_row.attr('data-car-id', car.id);
        var car_model = my_undefined(car['main.Model_mark']) + ' ' + my_undefined(car['main.Model']);
        if (car_model == ' ')
        {
            car_model = '[Безымянный автомобиль]';
        }
        car_row.find('.car_data_row1').html('<a href="CarDetails.html?carid=' + car.id + '" target="_blank"><span>' + car_model + ' ' + my_undefined(car['main.Year']) + '</span></a>');
        car_row.find('.car_data_row2').html(my_undefined(car['main.Modification']) + ' ' + my_undefined(car['main.Drivetrain']) + ' ' + my_undefined(car['main.Engine_type']))

        var end_moment = moment(car.logical_end_moment);
        car_row.find('.auct_end_dt').html('Торги завершены: ' + end_moment.format('lll') + '');
        car_row.find('.auct_length').html('&nbsp;&nbsp;&nbsp;Длительность торгов: ' + end_moment.diff(moment(car.auction_start), 'hours') + ' часов&nbsp;&nbsp;&nbsp;');

        if (car.max_bid.value == 1)
        {
            car_row.find('.auct_total_bids').html('Ставок: 0');
            car_row.find('.buyer_area').html('<p class="lead text-danger">Торги не состоялись. Нет ставок.</p>');
        } else
        {
            car_row.find('.auct_total_bids').html('Ставок: ' + car.bids.length + '');
            if (car.max_bid.buyers)
            {
                var buyer = loaded_buyers[car.max_bid.buyers[0].id];
                car_row.find('.car_buyer_name').html('Победитель: ' + my_undefined(buyer.name) + ' (тел: ' + my_undefined(buyer.phone) + ')');
            }
            car_row.find('.car_max_bid').html('Максимальная ставка: <strong>' + numeral(car.max_bid.value).format('0,0[.]00') + ' ₽</strong>');
            car_row.find('.btn-accept-trade').click(function () {
                var btn = $(this);
                var car_id = btn.parents('.car-row').attr('data-car-id');
                AcceptTrade(car_id);
            });
            car_row.find('.btn-refuse-trade').click(function () {
                var btn = $(this);
                var car_id = btn.parents('.car-row').attr('data-car-id');
                AcceptTrade(car_id);
            });
        }

        cnt.append(car_row);

    }


}

function AcceptTrade(car_id)
{
    var car = loaded_cars[car_id];
    var save_data = {
        id: car_id,
        auction_step: 2,
        trade_accepted: true,
        trades: [{
            collections: [{ id: 'car_trade' }],
            car: [{ id: car_id }],
            buyer: [{ id: car.max_bid.buyers[0].id }],
            price: car.max_bid.value,
            dt: new Date(),
        }]
    };
    ShowLoading('body');
    db.save('car', save_data).done(function () {
        alert('Продажа автомобиля подтверждена');
        FillData();
        HideLoading('body');
    }).fail(function () {
        HideLoading('body');
        alert('Ошибка при сохранении данных.');
    });
}

function RefuseTrade(car_id)
{
    var car = loaded_cars[car_id];
    var save_data = {
        id: car_id,
        auction_step: 2,
        trade_accepted: false,
    };
    ShowLoading('body');
    db.save('car', save_data).done(function () {
        alert('Результаты торгов отменены.');
        FillData();
        HideLoading('body');
    }).fail(function () {
        HideLoading('body');
        alert('Ошибка при сохранении данных.');
    });
}


function ShowCarDetails(car_id)
{
    var car = loaded_cars[car_id];
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

function FillSoldCars()
{
    ShowLoading('body');
    db.load('car', { filter: 'auction_step eq 2', expand: 'bids,images_main,trades' }).done(
        function (data) {
            var carlist = [];
            for (var i in data)
            {
                if (data[i].trade_accepted)
                {
                    carlist.push(data[i]);
                }
            }
            FillSoldCars_html(carlist);
        }).fail(function () {
            alert('Произошла ошибка при загруке "car"');
        }).always(function () {
            HideLoading('body');

        });
}

function FillSoldCars_html(cars)
{
    var cnt = $('#sold_autos_area');
    cnt.html('');

    for (var i in cars) {
        var car = cars[i];
        Auction.ProcessCar(car);       
    }

    loaded_sold_cars = {};
    for (var i in cars) {
        loaded_sold_cars[cars[i].id] = cars[i];
    }

    //order by date of maxbid
    cars.sort(function (a, b) {
        return (a.trades[0].dt > b.trades[0].dt) ? 1 : (a.trades[0].dt < b.trades[0].dt) ? -1 : 0;
    });



    for (var i in cars) {
        var car = cars[i];
        if (car.trades && car.trades.length > 0) {
            var car_row = $($('#car_row_sold_template').html());

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

            car_row.find('.auct_end_dt').html('Дата продажи: ' + moment(car.trades[0].dt).format('lll') + '');


            if (car.trades[0].buyer && car.trades[0].buyer.length > 0) {
                var buyer = loaded_buyers[car.trades[0].buyer[0].id];

                if (buyer) {
                    car_row.find('.car_buyer_name').html('Покупатель: ' + my_undefined(buyer.name) + ' (тел: ' + my_undefined(buyer.phone) + ')');
                }

                car_row.find('.trade_summ').html('Цена: <strong>' + numeral(car.trades[0].price).format('0,0[.]00') + ' ₽</strong>');
                cnt.append(car_row);
            }
        }
    }

}