var clin;
var std;
var mkb;

var pwd = '';
var logout_timer = null;

var db;

var car_id = null;
var car_data = {};
var car_models;

$(function () {
    

    DrawPage();

    InitPages();

    DbLogin().done(function () {
        AutoLogin().done(function () {
            var queries = [];

            queries.push(db.load('car_model', { expand: "generations,modifications" }).done(function (data) {
                car_models = data;
            }));

            if (localStorage['new_car_id'] == undefined)
            {
                car_id = GuidPlaceholder();
                localStorage['new_car_id'] = car_id;
            }else
            {
                car_id = localStorage['new_car_id'];
                queries.push(db.load('car(' + car_id + ')', { expand: "images_main,defects,schemeparts" })
                    .done(function (data) {
                        if (data.length > 0)
                        {
                            FillCarData(data[0]);
                        }
                }));
            }

            ShowLoading('body');

            WhenAll(queries).done(function () {
                Init2();
                InitModelSelector();
            }).always(function (){
                HideLoading('body');
            });

        });
    });

   
})

function Init2()
{
    ApplyClickEvents();

    /* Page1 - PERIODICAL SAVE */
    var page1_fld_values = {};
    var page1_check_and_save = function () {
        var changes = [];
        $('.js-car-form').find('[data-field]').each(function () {
            var fld = $(this);
            var fld_name = fld.attr('data-field');
            if (fld.hasClass('js-images-mosaic')) return; //skip images-mosaic
            if (!fld.is('input')) {
                alert('Неверный тип поля у ' + fld_name);
            }
            var val = fld.val();

            var old_val = page1_fld_values[fld_name];
            if (old_val == undefined) old_val = "";
            
            if (old_val != val) {
                page1_fld_values[fld_name] = val;
                changes.push({ field: fld_name, value: val });
            }
        })

        if (changes.length > 0) {
            var save_data = {};
            for (var i in changes) {
                save_data[changes[i].field] = changes[i].value;
            }
            SendSave_noblock(save_data);
        }
    }

    /* Page1 - PERIODICAL SAVE */
    setInterval(page1_check_and_save, 1000);

    FillAppearancePage(2);
}

function ApplyClickEvents()
{
    $('.js-btn-yes,.js-btn-no').click(function () {
        var this_btn = $(this);
        var btn_yes = this_btn.parent().find('.js-btn-yes');
        var btn_no = this_btn.parent().find('.js-btn-no');
        var fld_name = this_btn.parents('[data-field]').attr('data-field');
        var value;
        if (this_btn.hasClass('js-btn-yes')) {
            value = true;
        } else {
            ShowDamageForm(fld_name);
            return;
            value = false;
        }

        SetYesNo(btn_yes, btn_no, value);

        var data_to_save = {};
        data_to_save[fld_name] = value;
        data_to_save.id = car_data.id;

        SendSave(data_to_save);

        var promises = [];
        promises.push(db.save('car', data_to_save));

        for (var d in car_data.defects)
        {
            var defect = car_data.defects[d];
            if (defect.car_field == fld_name)
            {
                promises.push(db.del(defect.id));
            }
        }

    });

    
    $('[data-filefield]').change(function (evt) {
        var filefield = $(this).attr('data-filefield');
        UploadCarImage(filefield, evt.target.files);
    });
}

function InitPages()
{

    $('.js-car-form').find('[data-field]').each(function () {
        var fld = $(this);
        fld.parent().parent().find('label.control-label').html(car_fields_map[fld.attr('data-field')]);
    });


    var check_lists = car_check_lists;

    
 
    var pg_index = 3; //initial order index of that page (second after main form)
    var check_index = 29;
    for (var ic in check_lists)
    {
        var label = check_lists[ic].header;
        var fields = check_lists[ic].fields;

        var page = $($('#checklist_page_template').html());
        var page_id = 'checklist_page_' + ic;
        page.attr('id', page_id);

        page.insertAfter('.js-current-page');
        page.attr('data-page', pg_index);

        if (ic == check_lists.length - 1) {
            page.find('.js-btn-next').replaceWith('<span class="btn btn-success pull-right" id="push_to_auction">Выставить на аукцион <i class="fa fa-car"></i></span>');
            $('#push_to_auction').click(function () { PushToAcution(); });
        } else
        {
            page.find('.js-btn-next').attr('onclick', 'GoToPage(' + (pg_index + 1) + ')');
        }
        page.find('.js-btn-prev').attr('onclick', 'GoToPage(' + (pg_index - 1)  + ')');
        page.find('.js-checklist_header').html(label);

        pg_index++;
        var container = page.find('.js-checklist-area');
        for (var i in fields) {
            var fld = fields[i];
            var row = $($('#checklist_template').html());
            row.attr('data-field', fld);
            row.children('.checklist-label').html(check_index++ + ') ' + car_fields_map[fld]);
            container.append(row);

            row.hover(
                function () {
                    $(this).addClass('bg-info');
                }, function () {
                    $(this).removeClass('bg-info');
                });
        }


    }

    $('[data-page]').hide();
    $('.js-current-page').show();
}

function FillAppearancePage(pg_index)
{
    var page = $($('#checklist_page_template').html());
    var page_id = 'AppearancePage';
    page.attr('id', page_id);
    page.insertAfter('.js-current-page');
    page.attr('data-page', pg_index);
    page.find('.js-btn-prev').attr('onclick', 'GoToPage(' + (pg_index - 1) + ')');
    page.find('.js-btn-next').attr('onclick', 'GoToPage(' + (pg_index + 1) + ')');
    page.find('.js-checklist_header').html('Внешний вид');

    var container = page.find('.js-checklist-area');
    FillCarAppearance(container, car_data);
}

function GoToPage(page)
{
    $('.js-current-page').removeClass('js-current-page').hide();
    $('[data-page="' + page + '"]').addClass('js-current-page').show();
}

var fld_expand_id = 0;
function PushToAcution()
{
    /* Read filled fields */
    var car_data = {};
    $('[data-field]').each(function() {
        var fld = $(this);
        var value = undefined;
        if (fld.is('input'))
        {
            /* expect text field */
            if (fld.val() != "")
            {
                value = fld.val();
            }
        } else if (fld.hasClass('js-images-mosaic'))
        {
            value = fld.find('.mosaic-item').length;
        }else
        {
            /* expect yes/no field */
            var value = fld.attr('data-value');
        }
        if(value != undefined) car_data[fld.attr('data-field')] = value;
    })

    /* Check car fields filled */

    var notfilled_flds = [];
    for (var fld in car_fields_map)
    {
        if (fld.indexOf('main') >= 0) {
            if (car_data[fld] == undefined) {
                notfilled_flds.push(car_fields_map[fld]);
            }
        }
    }

    var html = '';
    if (notfilled_flds.length > 0)
    {
        html += '<p class="lead text-danger">Для выставления на аукцион необходимо заполнить все поля</p>';
        html += '<p class="lead text-danger">Не заполнено полей: ' + notfilled_flds.length + '</p>';
        html += '';

        var clp_uniq_id = "fld_expand" + fld_expand_id++;
        html += '<span class="btn btn-link btn-sm" data-target="#' + clp_uniq_id + '" data-toggle="collapse"> Просмотреть список незаполненных полей </span>';
        html += '<div class="collapsenotfilled_fields" id=' + clp_uniq_id + ' >';
        html += '<div class="my-notfilled_fields" >';
        html += notfilled_flds.join(', <br/>');
        html += '</div>';
        html += '</div>';
        html += '<br/>';
        html += '<span class="btn btn-danger js-push_auction_ok">Выставить на аукцион (отладка)</span>';
    } else
    {
        html += '<p class="lead">Вы уверены, что хотите выставить данный автомобиль на аукцион?</p>';
        html += '<span class="btn btn-success js-push_auction_ok">Выставить на аукцион</span>';
    }

    html += '<div class="col-lg-12 my-auction-mins-block"><div class="form-group"><label class="control-label col-lg-3">Время торгов (в минутах): </label><input class="form-contol auction_time" type="number" value="' + auction_default_mins + '"/></div></div>'

    var dialog;
    var on_shown = function () {
        dialog.elem.find('.js-push_auction_ok').click(function () {
            var time_input = dialog.elem.find('.auction_time');
            var auct_time = time_input.val();
            if(isNaN(auct_time))
            {
                alert('Время торгов заполнено некорректно');
                return;
            }

            ShowLoading('body');
            var data = {
                id: car_id,
                auction_step: 1,
                auction_start: new Date(),
                auction_time_mins: parseInt(auct_time),
            }
            db.save('car', data).done(
            function (data) {
                    dialog.close();
                    alert('Автомобиль успешно выставлен на аукцион.');
                    location.reload();
                }).always(function () {
                    HideLoading('body');
            });
        });
    };

    var on_close_dlg = function (dialog) {

    };
    dialog = ShowTmpDialog("Выставление автомобиля на аукцион", html, on_shown, on_close_dlg);


}

function SendSave(data)
{
    ShowLoading('body');
    data.id = car_id;
    db.save('car', data).done(
    function (data) {
        HideLoading('body');
        var data = JSON.parse(data).d.results;
        car_id = data.id;
    }).always(function () {
        HideLoading('body');
    });
}

function SendSave_noblock(data) {
    //ShowLoading('body');
    data.id = car_id;
    db.save('car', data).done(
    function (data) {
        //HideLoading('body');
        var data = JSON.parse(data).d.results;
        car_id = data.id;
    }).always(function () {
        //HideLoading('body');
    });
}

function FillCarData(data)
{
    car_data = data;
    if (data.auction_step)
    {
        $('#auction_msg_area').html('<div class="bg-danger lead">Данный автомобиль уже выставлен на аукцион <span class="btn btn-info" onclick="NewAuto();">Ввести новый авто</span></div>');
        $('#push_to_auction').unbind();
        $('#push_to_auction').addClass('disabled');
    }
    $('[data-field]').each(function() {
        var fld = $(this);
        var fldname = fld.attr('data-field');
        if (data[fldname] != undefined)
        {
            if (fld.is('input')) {
                fld.val(data[fldname]);
            } else if (fld.hasClass('js-images-mosaic')) {

                fld.html(FillCarImages(data, fldname));
            } else {
                //expect checklist fld
                var value = data[fldname]==true || data[fldname] == 'b1'; //b1 - bug workaround
                SetYesNo(fld.find('.js-btn-yes'), fld.find('.js-btn-no'), value);
            }
        }
    })
}

function RemoveImage(image_field, image_id)
{
    if (!confirm('Удалить?'))
    {
        return;
    }
    var img_data = null;
    for (var i in car_data[image_field]) {
        var image = car_data[image_field][i];
        if (image.id == image_id) {
            img_data = image;
            break;
        }
    }
    if (img_data == null) return;

    ShowLoading('body');
    db.del(img_data.id).done(function () {
        HideLoading('body');
        $('[data-field="' + image_field + '"] [data-image-id="' + image_id + '"]').remove();
    }).fail(function () {
        HideLoading('body');
        alert('Произошла ошибка при удалении изображения.');
    });

}

function UpdateIm()
{

}

function SetYesNo(yes_btn, no_btn, value)
{
    if (value != false) {
        yes_btn.removeClass('btn-default btn-success').addClass('btn-success');
        no_btn.removeClass('btn-default btn-danger').addClass('btn-default');
    } else {
        yes_btn.removeClass('btn-default btn-success').addClass('btn-default');
        no_btn.removeClass('btn-default btn-danger').addClass('btn-danger');
    }
    yes_btn.parents('[data-field]').attr('data-value', value);
}

function SetYesNoField(fldname, value)
{
    var fld = $('[data-field="' + fldname + '"]');
    var bt_yes = fld.find('.js-btn-yes');
    var bt_no = fld.find('.js-btn-no');
    SetYesNo(bt_yes, bt_no, value);
}

function NewAuto()
{
    delete localStorage['new_car_id'];
    location.reload();
}

function AddPhotoClick(btn)
{
    var btn = $(btn);
    var fld = btn.attr('data-filefield');
    $('input[type="file"][data-filefield="' + fld + '"]')[0].click();
}

function FillCarImages(car, img_fld) {
    var html1 = '';
    var images = car[img_fld];
    for (var im in images) {
        var img = images[im];
        html1 += '<span class="image-thumb mosaic-item" data-image-id="' + img.id + '">';
        html1 += '<img src="' + db_files + img.filename + '"/>';
        html1 += '<span class="my-image-fav">';
        html1 += '<a href="javascript:void(0)" onclick="RemoveImage(\'' + img_fld + '\',\'' + img.id + '\')"><i class="fa fa-times"></i></a>';
        html1 += '<a href="javascript:void(0)" onclick="PreviewImage(\'' + img_fld + '\',\'' + img.id + '\')"><i class="fa fa-search"></i></a>';
        html1 += '</span>';
        html1 += '</span>';
    }
    return html1;
}

function PreviewImage(image_field, image_id) {
    var img_data = null;
    for (var i in car_data[image_field]) {
        var image = car_data[image_field][i];
        if (image.id == image_id) {
            img_data = image;
            break;
        }
    }
    if (img_data == null) return;

    var html = '';
    html += '<div class="my-image-car-bg" style="background-image:url(' + db_files + img_data.filename + ')"></div>';//<img src="' + db_files + img_data.filename + '"/>';

    var dialog;
    var on_shown = function () {

    };

    var on_close_dlg = function (dialog) {

    };
    dialog = ShowTmpDialog("Просмотр фотографий", html, on_shown, on_close_dlg);
}

function UploadCarImage(filefield, files)
{
    var promises = [];
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var original_filename = file.name;

        //return;

        var promise = db.upload(file).done(function (data) {
            var uniq_filename = data.filename;

            var promise2 = SendSave_noblock({
                images_main: [{
                    collections: [{ id: 'car_images' }],
                    filename: uniq_filename,
                    orig_filename: original_filename,
                }]
            });
            promises.push(promise2);
        }).fail(function () {

            alert('Произошла ошибка при загрузке файла.');
        });
        promises.push(promise);
    }

    /* reload images */
    ShowLoading('body');
    WhenAll(promises).always(function () {
        db.load('car(' + car_id + ')', { expand: "images_main,defects,schemeparts" }).done(
        function (data) {
            car_data = data[0];
            $('.js-images-mosaic[data-field="' + filefield + '"]').html(FillCarImages(data[0], filefield));
        }).always(function () {
            HideLoading('body');
        });
    })
}

function ShowDamageForm(fldname)
{
    var fld_label = car_fields_map[fldname];
    var car = car_data;
    var defect = null;
    if (car.defects)
    {
        for (var i in car.defects)
        {
            if (car.defects[i].car_field == fldname)
            {
                defect = car.defects[i];
            }
        }
    }

    if (defect) {
        ShowLoading('body');
        db.load('car_defect(' + defect.id + ')', { expand: "images" }).done(
        function (data) {
            defect = data[0];
            after_load_defect();
            HideLoading('body');
        }).fail(function () {
            alert('Произошла ошибка при загрузке дефекта.');
        })
        .always(function () {
            HideLoading('body');
        });
    } else
    {
        after_load_defect();
    }

    function after_load_defect() {
        var html = $('#DefectFormTemplate').html();

        var dialog;
        var on_shown = function () {
            dialog.added_files = [];
            var cnt = dialog.elem;
            cnt.find('.defect-name').html('' + fld_label + ' - Нет!');

            if (defect)
            {
                var mosaic = cnt.find('.js-images-mosaic');
                for (var i in defect.images)
                {
                    var img = defect.images[i];
                    mosaic.append('<img src="' + ImgUrl(img.filename) + '"/>');
                }
                if (defect.comment)
                {
                    cnt.find('.comments-text').val(defect.comment);
                }
            }

            cnt.find('.js-btn-add-photo').click(function () {
                cnt.find('.js-upl-input')[0].click();
            });

            cnt.find('.js-upl-input').change(function (evt) {
                var mosaic = cnt.find('.js-images-mosaic');
                for (var i = 0; i < evt.target.files.length; i++) {
                    var file = evt.target.files[i];
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        mosaic.append('<img src="' + e.target.result + '"/>');
                    }
                    reader.readAsDataURL(file);
                    dialog.added_files.push(file);
                };
            });

            cnt.find('.js-btn-close').click(function () { dialog.close(); });

            cnt.find('.js-btn-save').click(function () {
                var loading_area = cnt.children('div');
                ShowLoading(loading_area);
                var images = [];
                var promises = [];
                for (var f in dialog.added_files) {
                    var file = dialog.added_files[f];
                    promises.push(
                        db.upload(file).done(function (data) {
                            images.push({
                                filename: data.filename,
                                collections: [{ id: 'car_images' }],
                                orig_filename: 'not saved',
                            });
                        }));
                }

                var save_data = {
                    id: car_data.id,
                    defects: [{
                        collections: [{ id: 'car_defect' }],
                        car_field: fldname,
                        images: images,
                        comment: cnt.find('.comments-text').val(),
                    }],
                };
                if(defect)
                {
                    save_data.defects[0].id = defect.id;
                } else
                {
                    if (car_data.defects == undefined) car_data.defects = [];
                    car_data.defects.push(save_data.defects[0]);
                }
                save_data[fldname] = false; //checklist field "No" value

                WhenAll(promises).done(function () {
                    db.save('car', save_data).done(function (json_data) {
                        SetYesNoField(fldname, false);
                        dialog.close();
                    }).fail(function () {
                        alert('Произошла ошибка во время сохранения описания дефекта.');
                    }).always(function () {
                        HideLoading(loading_area);
                    });

                })
                .fail(function () {
                    alert('Произошла ошибка во время загрузки фотографий');
                    HideLoading(loading_area);
                });
            });
        };

        var on_close_dlg = function (dialog) {
            dialog.elem.remove();
        };
        dialog = ShowTmpDialog("Ввод данных по дефекту", html, on_shown, on_close_dlg);


    }


}

function AddCarDataDefect(defect)
{

    for (var i in car_data.defects)
    {

    }
}


var loaded_manufacturers_dict;
var loaded_manufacturers;
var loaded_models_dict;
var loaded_modifications_dict;

function InitModelSelector() {
    var manufacturers = [];
    var mnf_names_dict = {};
    loaded_manufacturers_dict = {};
    loaded_models_dict = {};
    loaded_modifications_dict = {};
    for(var i in car_models)
    {
        var mdl = car_models[i];
        var mnf_name = mdl.manufacturer;
        if (mnf_names_dict[mnf_name] == undefined)
        {
            var mnf = {
                id: i,
                models: [],
                name: mnf_name
            };
            loaded_manufacturers_dict[mnf.id] = mnf;
            mnf_names_dict[mnf_name] = mnf;
            manufacturers.push(mnf);
        }
        mnf_names_dict[mnf_name].models.push(mdl);
        mdl.manufacturer = mnf;
        loaded_models_dict[mdl.id] = mdl;
        for (var j in mdl.modifications)
        {
            var modif = mdl.modifications[j];
            modif.model = mdl;
            loaded_modifications_dict[modif.id] = modif;
        }
    }

    for (var i = 0; i < 25; i++)
    {
        var mnf = {
            id: 'tst'+i,
            models: [],
            name: 'test_test_' + i
        };
        loaded_manufacturers_dict[mnf.id] = mnf;
        manufacturers.push(mnf);
        for (var j = 0; j < 20; j++)
        {
            var model = {
                id: GuidPlaceholder(),
                name: 'TestModel' + j,
                modifications: [],
                manufacturer: mnf,
            }
            mnf.models.push(model);
            loaded_models_dict[model.id] = model;
            for (var k = 0; k < 20; k++)
            {
                var modif = {
                    id: 'test_modif_' + mnf.name + '_' + model.name + k.toString(),
                    yearfrom: 2010,
                    yearto: 2015,
                    enginetype: 'Бензин',
                    bodytype: 'Седан',
                    transmission: 'Механика',
                    engine_hp: 150 + k * 5,
                    engine_volume: '2.0',
                    model: model,
                    drivetrain: 'Передний'
                };
                model.modifications.push(modif);
                loaded_modifications_dict[modif.id] = modif;
            }
        }
    }

    /* sort models */
    for (var i in manufacturers) {
        var mnf = manufacturers[i];
        //order by abc
        mnf.models.sort(function (a, b) {
            return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : 0;
        });
    }

    //order by abc
    manufacturers.sort(function (a, b) {
        return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : 0;
    });

    loaded_manufacturers = manufacturers;


    if (car_data['main.Model_mark'])
    {
        var mnf = find_by_name(loaded_manufacturers, car_data['main.Model_mark']);
        if (mnf)
        {
            if (car_data['main.Model']) {
                var model = find_by_name(mnf.models, car_data['main.Model']);
                if (model)
                {
                    var year = car_data['main.Year'];
                    if (year) {
                        var modif_id = car_data['Modification_id'];
                        var modif = modif_id ? loaded_modifications_dict[modif_id] : null;
                        if (modif)
                        {
                            var html = FillCarModelRow_html(model.manufacturer, model, year, modif);
                            FillModelSelector(html);
                        } else
                        {
                            Expand_ShowModificationSelector(model.id, year);
                        }
                    } else {
                        ExpandModifications(model.id);
                    }
                } else
                {
                    ExpandModels(mnf.id)
                }

            } else {
                ExpandModels(mnf.id);
            }
        } else
        {
            ExpandManufacturers();
        }
    } else
    {
        ExpandManufacturers();
    }

   
}

function find_by_name(list, name)
{
    for(var i in list)
    {
        if(list[i].name == name)
        {
            return list[i];
        }
    }
}

function ExpandManufacturers()
{

    var html = '';
    for (var i in loaded_manufacturers) {
        var mnf = loaded_manufacturers[i];
        html += '<span class="btn btn-link col-xs-3 col-lg-2" onclick="ExpandModels(\'' + mnf.id + '\')" data-mnf-id="' + mnf.id + '">' + mnf.name + '</span>';
    }

    FillModelSelector(html);
    $('#model_selector_below').html('');
}

function ExpandModels(manufacturer_id)
{
    var mnf = loaded_manufacturers_dict[manufacturer_id];
    SetCarInvisFields({
        manufacturer: mnf.name,
    });

    car_data.manufacturer = mnf;
    var html = '';
    html += FillCarModelRow_html(mnf);
    
    for (var i in mnf.models)
    {
        var model = mnf.models[i];
        html += '<span class="btn btn-link col-xs-3 col-lg-2" onclick="ExpandModifications(\'' + model.id + '\')" data-model-id="' + model.id + '">' + model.name + '</span>';
    }
    FillModelSelector(html);
    $('#model_selector_below').html('');
}

function ExpandModifications(model_id)
{
    var mdl = loaded_models_dict[model_id];
    SetCarInvisFields({
        manufacturer: mdl.manufacturer.name,
        model: mdl.name
    });

    var html = '';
    html += FillCarModelRow_html(mdl.manufacturer, mdl);

    html += '';

    FillModelSelector(html);
    $('#model_selector_below').html('');

    var year_html = '';
    var modifs = mdl.modifications;
    $('#model_selector_below').html($('#model_selector_year_templ').html() + '<div class="my-div-40px"></div>');

    year_html += '';

    var years_dict = {};

    var years_ordered = [];
    if (mdl.modifications && mdl.modifications.length > 0)
    {
        for (var i in mdl.modifications) {
            var modif = mdl.modifications[i];
            var yearto = 2016;
            if (modif.yearto) {
                yearto = modif.yearto;
            }

            for (var y = modif.yearfrom; y <= yearto; y++) {
                years_dict[y] = 1;
            }
        }
        
        for (var y in years_dict) {
            years_ordered.push(y);
        }
        years_ordered.sort(function (a, b) {
            return (a > b) ? 1 : (a < b) ? -1 : 0;
        });
    } else
    {
        for (var i = 1950; i <= 2016; i++)
        {
            years_ordered.push(i);
        }
    }

    

    year_html += '<select class="form-control" data-model-id="' + mdl.id + '" onchange="ExpandModifications_yearchanged(this)">';
    year_html += '<option></option>';
    for (var i in years_ordered)
    {
        year_html += '<option value="' + years_ordered[i] + '">' + years_ordered[i] + '</option>';
    }
    year_html += '</select>';

    $('#model_selector_below').find('.modif_year').replaceWith(year_html);
}

function ExpandModifications_yearchanged(select)
{
    var year = $(select).val();
    if (!isNaN(year))
    {
        var mdl = loaded_models_dict[$(select).attr('data-model-id')];

        SetCarInvisFields({
            manufacturer: mdl.manufacturer.name,
            model: mdl.name,
            year: year,
        });

        Expand_ShowModificationSelector(mdl.id, year);
    }
}

function Expand_ShowModificationSelector(model_id, year)
{
    var model = loaded_models_dict[model_id];
    var modifs = model.modifications;
    var r = ProcessModifications(modifs, year);
    $('#model_selector_below').html(''); //clear year selector


    $('#model_selector_below').html($('#model_selector_modif_select_templ').html() + '<div class="my-div-40px"></div>');

    var html = '';
    html += '<select class="form-control" data-model-id="' + model.id + '" onchange="Modif_selected(this,\'' + year + '\')">';
    html += '<option></option>';
    for (var i in r.all_modifs) {
        var modif = r.all_modifs[i];
        html += '<option value="' + modif.id + '">' + ModifToStr(modif) + '</option>';
    }
    html += '</select>';

    $('#model_selector_below').find('.modif_select').replaceWith(html);


    if (r.enginetypes.length > 1) {


    } else if (r.transmissions.length > 1) {

    } else if (r.bodytypes.length > 1) {

    }

    var html = FillCarModelRow_html(model.manufacturer, model, year);
    FillModelSelector(html);
}

function Modif_selected(select, year)
{
    var modif_id = $(select).val();
    var modif = loaded_modifications_dict[modif_id];
    $('#model_selector_below').html('');
    var mdl = modif.model;

    SetCarInvisFields({
        manufacturer: mdl.manufacturer.name,
        model: mdl.name,
        year: year,
        modif_id: modif.id
    });
    SetCarFields(modif);

    var html = FillCarModelRow_html(mdl.manufacturer, mdl, year, modif);
    FillModelSelector(html);
}

function FillCarModelRow_html(mnf, model, year, modification)
{
    var html = '';
    if (mnf)
    {
        html += '<div class="col-xs-12"><span class="btn btn-link btn-lg my-model-selector-btn" onclick="ExpandManufacturers()">' + mnf.name + '</span>';
        if (model) {
            html += '<span class="btn btn-link btn-lg my-model-selector-btn"  onclick="ExpandModels(\'' + mnf.id + '\')" data-mnf-id="' + mnf.id + '">' + model.name + '</span>';

            if (year)
            {
                html += '<span class="btn btn-link btn-lg my-model-selector-btn"  onclick="ExpandModifications(\'' + model.id + '\')" data-model-id="' + model.id + '">' + year + '</span>'

                if (modification)
                {
                    html += '<span class="btn btn-link btn-lg my-model-selector-btn"  onclick="Expand_ShowModificationSelector(\'' + model.id + '\',\'' + year + '\')" data-model-id="' + model.id + '">' + ModifToStr(modification) + '</span>'
                }
            }
        }

        html += '</div>';
    }

    return html;
}

function FillModelSelector(content_html)
{
    var cnt = $('#model_selector');
    var html = $('#model_selector_templ').html();
    html = html.replace('$$content$$', content_html);

    cnt.html(html);
}

function ProcessModifications(modifs, year)
{
    var r = {
        modifs_by_enginetype: {},
        modifs_by_transmissions: {},
        modifs_by_bodytypes: {},
        enginetypes: [],
        transmissions: [],
        bodytypes: [],
        all_modifs: [],
    };

    for (var i in modifs)
    {
        var modif = modifs[i];
        var yearto = 3000;
        if(modif.yearto)
        {
            yearto = modif.yearto;
        }
        if(year >= modif.yearfrom && year <= yearto)
        {
            var m_engtype = modif.enginetype;
            if (r.modifs_by_enginetype[m_engtype] == undefined)
            {
                r.modifs_by_enginetype[m_engtype] = [];
                r.enginetypes.push(m_engtype);
            }
            r.modifs_by_enginetype[m_engtype].push(modif);

            var m_tran = modif.transmission;
            if (r.modifs_by_transmissions[m_tran] == undefined)
            {
                r.modifs_by_transmissions[m_tran] = [];
                r.transmissions.push(m_tran);
            }
            r.modifs_by_transmissions[m_tran].push(modif);

            var m_bod = modif.bodytype;
            if (r.modifs_by_bodytypes[m_bod] == undefined) {
                r.modifs_by_bodytypes[m_bod] = [];
                r.bodytypes.push(m_bod);
            }
            r.modifs_by_bodytypes[m_bod].push(modif);

            r.all_modifs.push(modif);
        }
    }
    return r;
}

function SetCarInvisFields(data)
{

    //<input type="hidden" class="form-control" data-field="main.Model_mark"/>
    //<input type="hidden" class="form-control" data-field="main.Model"/>
    //<input type="hidden" class="form-control" data-field="main.Modification"/>
    //<input type="hidden" class="form-control" data-field="main.Year"/>

    if (data.model)
    {
        $('[data-field="main.Model"]').val(data.model);
    } else
    {
        $('[data-field="main.Model"]').val('');
    }

    if (data.manufacturer) {
        $('[data-field="main.Model_mark"]').val(data.manufacturer);
    } else {
        $('[data-field="main.Model_mark"]').val('');
    }

    if (data.year) {
        $('[data-field="main.Year"]').val(data.year);
    } else {
        $('[data-field="main.Year"]').val('');
    }

    if (data.modif_id)
    {
        $('[data-field="Modification_id"]').val(data.modif_id);
    } else
    {
        $('[data-field="Modification_id"]').val(null);
    }
}

function SetCarFields(modif)
{
    $('[data-field="main.Engine_volume"]').val(modif.engine_volume);
    $('[data-field="main.Engine_power_ps"]').val(modif.engine_hp);
    $('[data-field="main.Engine_type"]').val(modif.enginetype);
    $('[data-field="main.Body_type"]').val(modif.bodytype);
    $('[data-field="main.Transmission"]').val(modif.transmission);
    $('[data-field="main.Drivetrain"]').val(modif.drivetrain);
    
}


var trasmission_codes = {
    "Механика": "MT",
    "Автомат": "AT",
    "Вариатор": "CVT",
    "Робот": "AMT",
}
function ModifToStr(modif)
{
    var res = '';

    res += modif.bodytype;
    res += ' ' + trasmission_codes[modif.transmission];
    res += ' ' + modif.engine_volume;
    res += ' (' + modif.engine_hp + ' л.с.)';

    return res;
}

