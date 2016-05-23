var loaded_users;

$(function () {

    DrawPage();
    DbLogin().done(function () {
        AutoLogin().done(function () {
            FillUsersList();
        });
    });
    $('#btn_refresh').click(function () { FillUsersList(); });
})



function FillUsersList()
{
    ShowLoading('body');
    db.load('user').done(
    function (users) {
        loaded_users = {};
        for (var i in users)
        {
            loaded_users[users[i].id] = users[i];
        }
        FillUsersList_html(users);
    }).fail(function () {
        alert('Произошла ошибка при загрузке списка пользователей.');
    })
    .always(function () {
        HideLoading('body');
    });
}

function FillUsersList_html(users)
{
    var html = '';
    html += '<table class="table table-hover">';
    html += '<thead>';
    html += '<th style="text-align: left">Имя пользователя</th><th>ФИО</th><th>Уровень доступа</th><th></th>';
    html += '</thead>';
    html += '<tbody style="text-align:center">';
    for (var i in users) {
        var user = users[i];
        html += '<tr>';
        html += '<td style="text-align:left;white-space: nowrap;"><a href="javascript:void(0)" onclick="EditUser(\'' + user.id + '\')"><i class="fa fa-pencil-square-o"></i></a> ' + my_undefined(user.username) + '</td>';
        html += '<td>' + UserFio(user) + '</td>';
        html += '<td>' + UserAccessLevelStr(user) + '</td>';
        html += '<td><a href="javascript:void(0)" onclick="DeleteUser(\'' + user.id + '\')" title="Удалить"><i class="fa fa-times"></i></a></td>';
        html += '</tr>';
    }
    html += '</tbody>';
    html += '</table>';

    $('#users_list_area').html(html);
}

function UserFio(user)
{
    //return my_undefined(users.surname) + ' ' + my_undefined(users.name) + ' ' + my_undefined(users.name2);
    return user.name;
}

function UserAccessLevelStr(user)
{
    var res = [];
    if (user.is_admin === true || user.is_admin == "true")
    {
        res.push('Админ');
    }
    if (user.is_buyer === true || user.is_buyer == "true")
    {
        res.push('Покупатель');
    }
    if (user.is_manager === true || user.is_manager == "true")
    {
        res.push('Менеджер');
    }
    if (user.is_caradder === true || user.is_caradder == "true") {
        res.push('Добавление автомобилей');
    }
    return res.join(', ');
}

function EditUser(user_id) {
    var user = loaded_users[user_id];

    var html = $('#client_form_template').html();

    var dialog;
    var on_shown = function () {
        var cnt = dialog.elem;

        cnt.find('.btn-close').click(function () { dialog.close() });
        cnt.find('.btn-save').click(function () {

            var save_data = { id: user_id };
            cnt.find('[data-field]').each(function () {
                var fld = $(this);
                var fldname = fld.attr('data-field');
                if (fld.attr('type') == 'checkbox') {
                    save_data[fldname] = fld.is(':checked') == true;
                } else {
                    var value = fld.val();
                    if (value) {
                        save_data[fldname] = value;
                    }
                }
            });

            ShowLoading(cnt, 'Сохранение...');

            db.save('user', save_data).done(function () {
                HideLoading(cnt);
                dialog.close();
                FillUsersList();

            }).fail(function () {
                HideLoading(cnt);
                alert('Ошибка подключения к базе данных');
            });

        });
    };

    var on_close_dlg = function (dialog) {

    };

    dialog = ShowTmpDialog("Сведения о клиенте", html, on_shown, on_close_dlg);

    dialog.elem.find('[data-field]').each(function () {
        var fld = $(this);
        var fldname = fld.attr('data-field');
        if (user[fldname] != undefined) {
            if (fld.attr('type') == 'checkbox')
            {
                if (user[fldname] === true || user[fldname] == "true")
                {
                    fld.attr('checked', 'checked');
                } else
                {
                    
                }
            } else
            {
                fld.val(user[fldname]);
            }
            
        }
    });
}

function DeleteUser(user_id)
{
    if (confirm('Вы действительно хотите удалить данного пользователя?'))
    {
        ShowLoading('body', 'Удаление...');
        db.del(user_id).done(function () {
            HideLoading('body');
            FillUsersList();
        }).fail(function () {
            HideLoading('body');
        });
    }
}

function AddUser()
{
    EditUser();
}

function UsersRefresh()
{
    location.reload();
}