
function FillCarForm(cnt, car, options) {
    var main = cnt.find('.js-MainInfo');
    if (car.images_main) {
        var images_html = FillCarImages(car, 'images_main');
        main.find('.js-images-mosaic[data-field="images_main"]').html(images_html);
    }

    var html = '<table class="table table-hover">';
    for (var fldname in car_fields_map) {
        if (fldname.indexOf('main') >= 0) {
            html += '<tr>';
            html += '<td>';
            html += car_fields_map[fldname];
            html += '</td>';
            html += '<td>';
            html += car[fldname] ? car[fldname] : '';
            html += '</td>';
            html += '</tr>';
        }
    }
    html += '</table>';
    main.append(html);

    main.prepend('<p>' + my_undefined(car['main.Modification']) + ' ' + my_undefined(car['main.Drivetrain']) + ' ' + my_undefined(car['main.Engine_type']) + '</p>');
    main.prepend('<hr/><span class="lead">' + my_undefined(car['main.Model_mark']) + ' ' + my_undefined(car['main.Model']) + ' ' + my_undefined(car['main.Year']) + '</span>');

    var defects_cnt = cnt.find('.js-defects-area');
    ShowLoading(defects_cnt);
    FillDefects(car, defects_cnt, function () { HideLoading(defects_cnt) });

    FillCarAppearance(cnt.find('.js-appear-area'), car, options ? options.readmode==true : false);
}

var opened_images_dict;

function FillCarImages(car, img_fld) {
    var html1 = '';
    var images = car[img_fld];
    
    for (var im in images) {
        var im = parseInt(im);
        var img = images[im];
        html1 += '<span class="my-image-thumb" data-image-id="' + img.id + '" onclick="PreviewImage(\'' + img.id + '\')" style="cursor:pointer">';
        html1 += '<img src="' + db_files + img.filename + '"/>';
        html1 += '<span class="my-image-fav">';
        html1 += '<i class="fa fa-search" style="margin:3px"></i>';
        html1 += '</span>';
        html1 += '</span>';   
    }

    if (images.length > 0)
    {
        opened_images_dict = {};
        var last_item = {
            img: images[images.length - 1],
        };
        opened_images_dict[img.id] = last_item;

        var next_item = last_item;
        for (var i = images.length - 2; i >= 0; i--) {
            var next_img = next_item;
            next_item = {
                img: images[i],
                next: next_img,
            }
            opened_images_dict[images[i].id] = next_item;
        }
        last_item.next = next_item; //last -> first
        
    }


    return html1;
}

function PreviewImage(image_id) {


    var img_list_item = opened_images_dict[image_id];
    image_filename = img_list_item.img.filename;

    var html = '';
    html += '<span class="btn btn-info btn-sm js-btn-close pull-right">Закрыть</span><div class="my-div-30px"></div>\
        <div class="my-image-car-bg" style="background-image:url(' + db_files + image_filename + ')"></div>';

    var dialog;
    var on_shown = function () {

    };

    var on_close_dlg = function (dialog) {
        dialog.elem.remove();
    };
    dialog = ShowTmpDialog("Просмотр фотографий", html, on_shown, on_close_dlg);

    dialog.elem.find('.js-btn-close').click(function () {
        dialog.close();
    })

    dialog.elem.find('.my-image-car-bg').click(function () {
        img_list_item = img_list_item.next;
        dialog.elem.find('.my-image-car-bg').css('background-image', 'url(' + db_files + img_list_item.img.filename + ')');
    });

}


function FillDefects(car, container, after_fill) {
    //car\defects?expand=images

    container.html('');
    db.load('car(' + car.id + ')\\defects', { expand: "images" }).done(function (defects) {

        for (var i in defects) {
            var def = defects[i];
            var row = $($('#defect_row_template').html());

            row.find('.js-defect-name-area').html(car_fields_map[def.car_field]);
            if (def.comment) {
                row.find('.js-defect-comment-area').html(def.comment);
            }
            if (def.images && def.images.length > 0) {
                var img_cnt = row.find('.js-defect-images-area');
                for (var j in def.images) {
                    var img = def.images[j];
                    img_cnt.append('<a href="javascript:void(0)" onclick="DefectImagePreview(\'' + ImgUrl(img.filename) + '\')" data-image-path="' + ImgUrl(img.filename) + '"><img style="width:100px" src="' + ImgUrl(img.filename) + '"/></a>')
                }
            } else {
                row.find('.js-defect-images-area').remove();
                row.find('.js-change-width').removeClass('col-xs-6').addClass('col-xs-12');
            }

            container.append(row);
        }

    })
    .fail(function (data) {
        alert('Произошла ошибка при загрузке повреждений.');
    })
    .always(function () {
        if (after_fill) {
            after_fill();
        }
    });
}

function DefectImagePreview(img_src) {

    var html = '';
    html += '<div class="my-image-car-bg" style="background-image:url(' + img_src + ')"></div>';//<img src="' + db_files + img_data.filename + '"/>';

    var dialog;
    var on_shown = function () {

    };

    var on_close_dlg = function (dialog) {

    };
    dialog = ShowTmpDialog("Просмотр фотографии повреждения", html, on_shown, on_close_dlg);
}



function FillCarAppearance(container, car, readmode) {
    container.html('');
    var car_parts = {};
    car.schemeparts_dict = {};
    if (car.schemeparts) {
        for (var j in car.schemeparts) {
            var part = car.schemeparts[j];
            car_parts[part.svg_id] = part;
            car.schemeparts_dict[part.id] = part;
        }

    }

    var html = '';

    if (readmode)
    {
        /* Hide all edit buttons even newly created */
        $('#readmode_style').remove();
        $("<style>")
            .prop("type", "text/css")
            .prop("id", "readmode_style")
            .html("\
            .js-btn-edit-action {\
                display:none;\
            }")
            .appendTo("head");
    }

    var html = '<div class="car_scheme_container">' + $('#car_scheme_svg_template').html() + '</div>';
    container.append(html);

    var idx = 1;
    $('path').each(function () {
        var path = $(this);
        var svg_id = idx++;
        path.attr('svg_id', svg_id);

        if (car_parts[svg_id]) {
            path.attr('fill', 'red');
            path.attr('databoom_id', car_parts[svg_id].id);
        } else {
            path.attr('fill', 'gray');
        }
    });

    $('path').on("click", function () {
        var obj = $(this);
        //console.log('clicked ' + obj.attr('id'));
        //obj.attr('fill', 'gold');
        OpenAppearancePartDetails(car, obj.attr('databoom_id'), obj.attr('svg_id'), function (part) {
            if (part.rows && part.rows.length > 0) {
                obj.attr('fill', 'red');
                obj.attr('databoom_id', part.id);
            } else {
                obj.attr('fill', 'gray');
                obj.removeAttr('databoom_id', part.id);
            }
        });
    });

    //$('path').on("hover", function () {
    //    var obj = $(this);
    //    obj.attr('fill', 'gold');
    //});


}

function OpenAppearancePartDetails(car, part_id, svg_id, on_after_part_saved) {
    var part;
    if (part_id) {
        ShowLoading('body');
        db.load('car_schemepart(' + part_id + ')', { expand: "rows/images" }).done(
        function (data) {
            part = data[0];
            ShowEditDialog(part);
            HideLoading('body');
        }).fail(function () {
            alert('Произошла ошибка при загрузке.');
        })
        .always(function () {
            HideLoading('body');
        });
    } else {
        /* new ... */
        part = {
            id: GuidPlaceholder(),
            svg_id: svg_id,
            collections: [{ id: 'car_schemepart' }],
            rows: [],
        }
        ShowEditDialog(part);
    }

    /* Dialog 1 - list of rows */
    function ShowEditDialog(part) {

        part.rows_to_delete = {};
        var html = '';

        html += '<table class="table table-hover my-schemerows-table" data-car-id="' + car.id + '">';
        html += '<thead>';
        html += '<th class="my-col-lefted">Тип повреждения</th><th>Тип ремонта</th><th class="col-lg-2 col-xs-1 my-col-centered">Готово</th><th></th';//<th></th>
        html += '</thead>';
        html += '<tbody>';
        if (part.rows.length > 0) {

            for (var i in part.rows) {
                var partrow = part.rows[i];
                var imgs_length = partrow.images ? partrow.images.length : 0;
                html += partrow_html(partrow.id, partrow.damage_type, partrow.repair_type, imgs_length);
            }
        } else {
            /* empty row */
            html += partrow_html(GuidPlaceholder());
        }

        html += '<tr class="js-command-add-row">';
        html += '<td colspan="4">';
        html += '<span class="btn btn-default js-btn-add-partrow js-btn-edit-action" >Добавить <i class="fa fa-plus"></i></span>';
        html += '</td>';
        html += '</tr>';

        html += '</tbody>';
        html += '</table>';

        html += '\
            <hr/><div class="row my-schemerows-bottom"><div class="col-xs-12">\
                <span class="btn btn-success js-btn-save pull-right js-btn-edit-action">Сохранить <i class="fa fa-floppy-o"></i></span>\
                <span class="btn btn-info js-btn-close pull-right">Закрыть</span>\
            </div><div>\
        ';

        var dialog;
        var on_shown = function () {

        };
        var afterclose_param = null;
        var on_close_dlg = function (dialog) {
            var rows = [];
            dialog.elem.remove();
        };
        dialog = ShowTmpDialog("Ввод данных по детали", html, on_shown, on_close_dlg);

        dialog.elem.find('.js-btn-add-partrow').click(function () {
            var btn = $(this);
            var html = '';
            html += partrow_html(GuidPlaceholder());
            var tr = $(html);
            btn.parents('tr.js-command-add-row').before(tr);
            tr.find('.js-star-button').click(function () {
                var btn = $(this);
                var partrow_id = btn.parents('tr[data-partrow-id]').attr('data-partrow-id');
                OpenEditRowDialog(partrow_id);
            });

            tr.find('.js-btn-del-row').click(function () {
                DeleteRowClick($(this));
            })

        });

        dialog.elem.find('.js-btn-save').click(function () {
            var rows = [];
            dialog.elem.find('tr[data-partrow-id]').each(function () {
                var tr = $(this);
                rows.push({
                    id: tr.attr('data-partrow-id'),
                    damage_type: tr.find('.js-damage-type').val(),
                    repair_type: tr.find('.js-repair-type').val(),
                    collections: [{ id: 'schemepart_row' }],
                });
            });
            var rows_to_del = [];
            for (var row_id in part.rows_to_delete) {
                rows_to_del.push(row_id);
            }
            var promises = [];
            var whole_part_remove = false;
            if (rows_to_del.length > 0 && rows.length == 0) {
                whole_part_remove = true;
                promises.push(db.del(part.id).done(function () {

                }).fail(function () {
                    alert('Произошла ошибка при сохранении');
                }));
            } else if (rows_to_del.length > 0) {
                promises.push(db.del(rows_to_del).done(function () {

                }).fail(function () {
                    alert('Произошла ошибка при сохранении');
                }));
            }
            var part_data = { rows: [] };
            if (!whole_part_remove) {
                part_data = {
                    id: part.id,
                    svg_id: part.svg_id,
                    collections: [{ id: 'car_schemepart' }],
                    rows: rows,
                };
                var savedata = {
                    id: car.id,
                    schemeparts: [part_data]
                }

                promises.push(db.save('car', savedata).done(function () {

                }).fail(function () {
                    alert('Произошла ошибка при сохранении');
                }));
            }

            ShowLoading(dialog.elem);
            WhenAll(promises).done(function () {
                HideLoading(dialog.elem);
                if (on_after_part_saved) {
                    on_after_part_saved(part_data);
                }
                dialog.close();
            })
            .fail(function () {
                alert('Произошла ошибка во время загрузки фотографий');
                HideLoading(dialog.elem);
            });
        });

        dialog.elem.find('.js-btn-close').click(function () {
            dialog.close();
        });

        dialog.elem.find('.js-star-button').click(function () {
            var btn = $(this);
            var partrow_id = btn.parents('tr[data-partrow-id]').attr('data-partrow-id');
            OpenEditRowDialog(partrow_id);
        });

        dialog.elem.find('.js-btn-del-row').click(function () {
            DeleteRowClick($(this));
        })

        function partrow_html(row_id, col1, col2, col3) {
            if (col1 == undefined) col1 = '';
            if (col2 == undefined) col2 = '';
            if (col3 == undefined) col3 = 0;

            var html = '';
            html += '<tr data-partrow-id="' + row_id + '">';
            html += '<td class="my-cmd-col">' + '<textarea rows="2" class="js-damage-type">' + col1 + '</textarea>' + '</td>';
            html += '<td>' + '<textarea rows="2" class="js-repair-type">' + col2 + '</textarea>' + '</td>';
            html += '<td class="my-col-centered">';
            html += '<a href="javascript:void(0)" class="js-star-button" title="Добавить/удалить фото"><i class="fa fa-star my-textstar"><span class="sn">' + col3 + '</span></i></a>';
            html += '</td>';
            html += '<td><a href="javascript:void(0)" class="my-del-schemepart-row" title="Удалить строку" class="js-btn-del-row js-btn-edit-action"><i class="fa fa-times-circle"></i></a></td>';
            html += '</tr>';

            return html;
        }

        function OpenEditRowDialog(partrow_id) {
            var tr = dialog.elem.find('tr[data-partrow-id="' + partrow_id + '"]');
            var form_data = {
                damage_type: tr.find('.js-damage-type').val(),
                repair_type: tr.find('.js-repair-type').val(),
            };
            var on_saved = function (part, row) {
                var rowtr = dialog.elem.find('[data-partrow-id="' + row.id + '"]');
                rowtr.find('.js-damage-type').val(row.damage_type);
                rowtr.find('.js-repair-type').val(row.damage_type);
                rowtr.find('.sn').html(row.images.length);
                on_after_part_saved(part);
            }
            SchemepartPhotoGallery(part, partrow_id, on_saved, form_data);
        }

        function DeleteRowClick(btn) {
            var tr = btn.parents('tr[data-partrow-id]');
            var partrow_id = tr.attr('data-partrow-id');
            part.rows_to_delete[partrow_id] = 1;
            tr.remove();
        }

    }

    /* Dialog 2 - row editor */
    function SchemepartPhotoGallery(part, partrow_id, on_saved, prev_form_data) {
        var partrow = null;
        if (part.rows) {
            for (var i in part.rows) {
                var row = part.rows[i];
                if (row.id == partrow_id) {
                    partrow = row;
                    break;
                }
            }
        } else {
            part.rows = [];
        }
        if (partrow == null) {
            partrow = {
                id: partrow_id,
                images: [],
                //saved: false,
                damage_type: '',
                repair_type: '',
                collections: [{ id: 'schemepart_row' }]
            }
            part.rows.push(partrow);
        }

        /* load data from the same fields from previous form */
        partrow.damage_type = prev_form_data.damage_type;
        partrow.repair_type = prev_form_data.repair_type;

        var html = '';

        var templhtml = '\
    <div>\
    <div class="js-defect-name lead text-danger"></div>\
    <label class="form-label">Тип повреждения</label>\
    <textarea class="form-control js-damage-type" rows="2"></textarea>\
\
        <label class="form-label">Тип ремонта</label>\
        <textarea class="form-control js-repair-type" rows="2"></textarea>\
\
\
        <div class="panel panel-default">\
            <div class="panel-body">\
                <span class="lead">Фотографии</span>\
                <span class="btn btn-primary js-btn-add-photo js-btn-edit-action">\
                    Добавить фото <i class="fa fa-camera"></i>\
                </span>\
                <input type="file" class="form-control js-upl-input" multiple="multiple" style="display:none"/>\
                <div class="col-xs-12 js-images-mosaic">\
    \
                </div>       \
            </div>\
\
        </div>\
            <hr/>\
            <div class="row">\
                <div class="col-xs-12">\
                    <span class="btn btn-success js-btn-save pull-right js-btn-edit-action">Сохранить <i class="fa fa-floppy-o"></i></span>\
                    <span class="btn btn-info js-btn-close pull-right">Закрыть</span>\
                </div>\
            </div>\
\
    \
        </div>';

        html += '<div class="my-schemepart-gallery">' + templhtml + '</div>';

        var dialog;
        var on_shown = function () {

        };

        var on_close_dlg = function (dialog) {
            dialog.elem.remove();
        };
        dialog = ShowTmpDialog("Фотографии повреждения", html, on_shown, on_close_dlg);

        dialog.added_files = [];

        if (partrow.images) {
            var img_mosaic = dialog.elem.find('.js-images-mosaic');
            for (var m in partrow.images) {
                var img = partrow.images[m];
                img_mosaic.append('<img src="' + ImgUrl(img.filename) + '" class="my-image-item"/>');
            }
        }

        dialog.elem.find('.js-damage-type').val(partrow.damage_type);
        dialog.elem.find('.js-repair-type').val(partrow.repair_type);

        dialog.elem.find('.js-btn-add-photo').click(function () {
            dialog.elem.find('.js-upl-input')[0].click();
        });

        dialog.elem.find('.js-upl-input').change(function (evt) {
            var mosaic = dialog.elem.find('.js-images-mosaic');
            for (var i = 0; i < evt.target.files.length; i++) {
                var file = evt.target.files[i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    mosaic.append('<img src="' + e.target.result + '" class="my-image-item"/>');
                }
                reader.readAsDataURL(file);
                dialog.added_files.push(file);
            };
        });

        dialog.elem.find('.js-btn-save').click(function () {
            ShowLoading(dialog.elem);
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
            partrow.damage_type = dialog.elem.find('.js-damage-type').val();
            partrow.repair_type = dialog.elem.find('.js-repair-type').val();
            partrow.images = images;

            var partdata = {
                id: part.id,
                svg_id: part.svg_id,
                collections: [{ id: 'car_schemepart' }],
                rows: [
                    partrow,
                ]
            };
            var savedata = { //save part (car, including 1 schemepart, which includes 1 row in schemepart)
                id: car.id,
                schemeparts: [partdata],
            }

            WhenAll(promises).done(function () {
                db.save('car', savedata).done(function (json_data) {
                    //var data = JSON.parse(json_data).d.results;
                    if (on_saved) {
                        on_saved(partdata, partrow);
                    }
                    dialog.close();
                }).fail(function () {
                    alert('Произошла ошибка во время сохранения.');
                }).always(function () {
                    HideLoading(dialog.elem);
                });

            })
            .fail(function () {
                alert('Произошла ошибка во время загрузки фотографий');
                HideLoading(dialog.elem);
            });
        });

        dialog.elem.find('.js-btn-close').click(function () {
            dialog.close();
        });
    }
}