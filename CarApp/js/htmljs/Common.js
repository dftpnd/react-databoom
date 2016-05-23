db_name = 'b276'
db_url = 'https://t276.databoom.space';
db_p = '123';
db_files = 'https://t276.databoom.space/uploads/t276/b276/'

var auction_default_mins = 24;
var auction_bid_addition_secs = 60;

function ImgUrl(filename)
{
    return db_files + filename;
}

$(function () {

    if (window['numeral'])
    {
        numeral.language('ru');
    }

    if (window['moment'])
    {
        moment.locale('ru');
    }
})

function Common_OnClickTab(btn)
{
    var btn = $(btn);
    var cls = btn.attr('data-pills-page');
    if (cls)
    {
        var tab_container = btn.parents('.common-tabs');
        //.find('.' + cls)
        tab_container.children('ul').children('li').removeClass('active');
        btn.parents('li').addClass('active');

        tab_container.find('.tab-pane.in').removeClass('in').hide();

        var tab = tab_container.find('.' + cls);
        tab.addClass('in').show();
        if (tab.attr('data-event-shown'))
        {
            var funcname = tab.attr('data-event-shown');
            if (window[funcname])
            {
                window[funcname](tab);
            }
        }


    }
}


function WhenAll(callbacks) {
    var deferreds = [];
    for (var i in callbacks) {
        deferreds[i] = $.Deferred();
    }
    var counter = 0;
    for (var i in callbacks) {
        callbacks[i].then(
            function () {
                deferreds[counter++].resolve();
            },
            function () {
                deferreds[counter++].resolve();
            }
        )
    }
    return $.when.apply($, deferreds).promise();
}

function ShowLoading(container_id, message) {
    if (typeof container_id == 'object') {
        container_id.block({
            message: message ? message : null,
        });
    } else {
        $(container_id).block({
            message: message ? message : null,
        });
    }
}

function HideLoading(container_id) {
    if (typeof container_id == 'object') {
        container_id.unblock();
    } else {
        $(container_id).unblock();
    }
}



var dialog_uniq_ids = 0;
function ShowTmpDialog(title, html, on_after_show, on_after_hide) {
    var dialog_id = 'mytmp_dialog' + dialog_uniq_ids++;
    var dialog_label_id = 'mytmp_dialog_labl' + dialog_uniq_ids++;
    var dialog = {};

    var dialog_html = '\
<div class="modal fade" id="' + dialog_id + '" tabindex="-1" role="dialog" aria-labelledby="' + dialog_label_id + '" aria-hidden="true" style="width:100%;">\
  <div class="modal-dialog" style="width:95%;max-width:1000px;">\
    <div class="modal-content" >\
      <div class="modal-header">\
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
        <h4 class="modal-title" id="' + dialog_label_id + '">' + title + '</h4>\
      </div>\
      <div class="modal-body">\
      ' + html + '\
      </div>\
    </div>\
  </div>\
</div>\
    ';

    $('body').append(dialog_html);



    $('#' + dialog_id).on('show.bs.modal', function () {
        var zIndex = 1040 + (10 * $('.modal:visible').length);
        $(this).css('z-index', zIndex);
        $(this).find('.modal-dialog').css('z-index', zIndex);
        setTimeout(function () {
            $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
        }, 0);
    });

    $('#' + dialog_id).modal({
        show: true,
        backdrop: 'static'
    });

    //$('.modal-backdrop').removeClass('modal-backdrop');

    var dialog = {
        elem: $('#' + dialog_id),
        id: dialog_id,
        close: function (param) {
            $('#' + this.id).modal('hide');
        },
    };

    if (on_after_show) {
        $('#' + dialog_id).on('shown.bs.modal', function () {
            on_after_show(dialog);
        })

        if (on_after_hide) {
            $('#' + dialog_id).on('hidden.bs.modal', function () {
                on_after_hide(dialog);
            })
        }
    }



    return dialog;
}

function ReShowTmpDialog(dialog_obj) {
    $('#' + dialog_obj.id).modal('show');
    //$('.modal-backdrop').removeClass('modal-backdrop');
}



function my_undefined(value)
{
    if (value == undefined)
        return '';
    else
        return value;
}

function CarHead(car) {
    return my_undefined(car['main.Model_mark']) + ' ' + my_undefined(car['main.Model']) + ' ' + my_undefined(car['main.Year']);
}


function DrawPage()
{
    $('body').append('<div class="container" id="page_content"></div>');
    $('body').children(':not(page_content)').appendTo('#page_content');
    $('#page_content').hide();
    DrawPageHeader();
}


function DrawPageHeader()
{
    var html = '\
        <nav class="navbar navbar-inverse navbar-default  navbar-static-top" style="width: 100vw" >\
            <div class="container">\
                <div class="pull-right logout_btn_margin" >\
                    <span id="user_header_label" style="margin-right: 20px;" class=""></span>\
                    <span class="btn btn-default" style="margin-right:30px; display: none;" id="login_btn">Вход  <i class="fa fa-sign-in"></i></span>\
                    <span class="btn btn-default" style="margin-right:30px; display: none;" id="logout_btn">Выход  <i class="fa fa-sign-out"></i></span>\
                </div>\
                <div class="navbar-header" style="vertical-align: middle;">\
                    <a class="navbar-brand hidden-xs hidden-sm navbar-brand-a-lg" href="javascript:void(0)">\
                        <span>Car App</span>\
                    </a>\
                    <a class="navbar-brand hidden-lg hidden-md navbar-brand-a-xs" href="javascript:void(0)">\
                        <span">Car App</span>\
                    </a>\
                </div>\
            </div>\
        </nav>';

    $('body').prepend(html);
}

function AutoLogin() {

    var promise = new jQuery.Deferred();

    if (localStorage['user_id'] == undefined) {
        Unauthenticated();
    } else {
        var u = localStorage['user_id'];
        var p = localStorage['user_p'];

        ShowLoading('body');
        LoginByUserId(u, p).done(function (users) {
            if (users.length > 0)
            {
                if (CheckPageAccess(users[0]))
                {
                    Authenticated(users[0]);
                    promise.resolve(users);
                }
            } else
            {
                promise.reject();
                Unauthenticated();
            }
        }).fail(function () {
            Unauthenticated();
            promise.reject();
        }).always(function () {
            HideLoading('body');
        });

    }

    return promise.promise();

    function ShowAccessError(msg)
    {
        if (msg == undefined) {
            msg = 'Данная страница недоступна.';
        }
        var html = '<div class="row"><div class="col-lg-12 alert alert-danger" role="alert">' + msg + '</div></div>';
        if ($('#page_content').length > 0)
        {
            $('#page_content').show();
            $('#page_content').html(html);
        } else
        {
            $('body').html(html);
        }
    }

    function CheckPageAccess(user)
    {
        var page_name = location.pathname.substring(1);
        if (page_name == 'UserManager.html' && !(user.is_admin === true || user.is_admin == "true"))
        {
            ShowAccessError();
            return false;
        } else if (page_name == 'CarForm.html' && !(user.is_caradder === true || user.is_caradder == "true"))
        {
            ShowAccessError();
            return false;
        } else if (page_name == 'Manager.html' && !(user.is_manager === true || user.is_manager == "true"))
        {
            ShowAccessError();
            return false;
        } else if (page_name == 'Auction.html' && !(user.is_buyer === true || user.is_buyer == "true"))
        {
            ShowAccessError();
            return false;
        }
        return true;
    }

    function Unauthenticated() {
        $('body').children(':not(nav)').remove();
        $('body').append('<div class="container"><p class="lead">Для работы в программе требуется авторизация. Нажмите кнопку "Вход".</p></div>');
        $('#login_btn').show().click(function () {
            ShowLoginForm();
        });
        ShowLoginForm();
    }

    function Authenticated(user)
    {
        $('#page_content').show();
        $('#logout_btn').show().click(function () {
            Logout();
        });
        $('#user_header_label').html('<a href="javascript:void(0)" style="color:white"><i class="fa fa-user"></i> ' + my_undefined(user.name) + '</a>');
    }

    function ShowLoginForm() {
        var html =
            '<div class="form-horizontal">' +
                '<div class="form-group">' +
                    '<label class="col-xs-3 col-lg-5 control-label">Имя пользователя</label>' +
                    '<div class="col-xs-9 col-lg-7">' +
                        '<input type="text" class="form-control usr-login"/>' +
                    '</div>' +
                '</div>' +
                '<div class="form-group">' +
                    '<label class="col-xs-3  col-lg-5 control-label">Пароль</label>' +
                    '<div class="col-xs-9 col-lg-7">' +
                        '<input type="password" class="form-control usr-p"/>' +
                    '</div>' +
                '</div>' +
                '<div class="form-group">' +
                    '<div class="col-xs-5 col-md-6"><span class="btn btn-default btn-cancel pull-left">Отмена</span></div>' +
                    '<div class= col-xs-5 col-md-6"><span class="btn btn-success btn-login-ok pull-right">Вход <i class="fa fa-sign-in"></i></span></div>' +
                    
                 '</div>' +
            '</div>' +
            '' +
            '' +
            '' +
            '' +

            '';

        var dialog;
        var on_shown = function () {
            var cnt = dialog.elem;
            

            cnt.find('.btn-cancel').click(function () { dialog.close() });

            cnt.find('.btn-login-ok').click(function () {
                var u = cnt.find('.usr-login').val();
                var p = cnt.find('.usr-p').val();
                if (u.length == 0 || p.length == 0) {
                    alert('Имя пользователя или пароль не введены');
                    return;
                }
                ShowLoading(cnt);
                Login(u, p).done(function (users) {
                    if (users.length > 0) {
                        localStorage['user_id'] = users[0].id;
                        localStorage['user_p'] = p;
                        location.reload();
                    } else {
                        alert('Не удается войти. Проверьте правильность написания имени пользователя и пароля.');
                    }
                }).fail(function () {
                    alert('Не удается войти. Проверьте правильность написания имени пользователя и пароля.');
                }).always(function () {
                    HideLoading(cnt);
                });
            });
        };

        dialog = ShowTmpDialog("Вход в CarApp", html, on_shown);
        dialog.elem.children('.modal-dialog').css('max-width', '500px');
    }

    function Login(login, p) {
        var filter = '(username eq \'' + login + '\') and (pwd eq \'' + p + '\')';


        return db.load('user', { filter: filter }).done(
            function (users) {
                if (users.length > 0) {

                } else {

                }
            }).fail(function () {
                alert('Произошла ошибка при входе в систему.');
            })
            .always(function () {

            });
    }

    function LoginByUserId(user_id, p) {
        var filter = 'pwd eq \'' + p + '\'';


        return db.load('user(' + user_id + ')', { filter: filter }).done(
            function (users) {
                if (users.length > 0) {

                } else {

                }
            }).fail(function () {
                alert('Произошла ошибка при входе в систему.');
            })
            .always(function () {

            });
    }

    function Logout()
    {
        delete localStorage['user_id'];
        delete localStorage['user_p'];
        location.reload();
    }
}

function DbLogin()
{
    db = databoom(db_url, db_name);
    ShowLoading('body', 'Подключение к базе данных.');
    return db.login('default', db_p).done(function () {
        HideLoading('body');
        
    }).fail(function () {

        alert('Ошибка подключения к базе данных.');
        HideLoading('body');
    }).always(function () {
        
    });
}


function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}