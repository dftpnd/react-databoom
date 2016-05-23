$(function () {
    DrawPage();
    DbLogin().done(function () {
        AutoLogin().done(function (users) {   
            if (getUrlVars()["carid"] != undefined) {
                var car_id = getUrlVars()["carid"];
                
                ShowLoading('body');
                db.load('car(' + car_id + ')', { expand: "images_main,defects,schemeparts" })
                    .done(function (data) {
                        if (data.length > 0) {
                            car = data[0];
                            var cnt = $('#car_details_area');
                            FillCarForm(cnt, car, {readmode:true});
                        }
                    }).always(function () {
                        HideLoading('body');

                    });
            } else {
                
            }
        });
    });
})