$(document).ready(function() {

    $('#sales-filter input, #sales-filter select').change(function() {
        var form   = $('#sales-filter'),
            filter = form.find('[name="sort-by"]').val(),
            period = form.find('[name="period"]:checked').val();

        $.ajax({
            url: 'ajax/sales.php',
            method: 'GET',
            data: {'filter' : filter, 'period' : period},
            dataType: "JSON",
            success: function (json) {
                console.log('hg');
               if(json.success) {
                   console.log(json);
                   var content = showCases(json.cases);
                   $('.cases-sales__cnt > div').html(content);
               }
            }
        });
    });

    function showCases(cases) {
        var html = "";

        cases.forEach(function(item) {
            html += '<div class="promo__cases__col __simple">\
                        <div class="promo-case cases-sales__case">\
                            <div class="promo-case__img">\
                                <div class="promo-case__img__case">\
                                    <img src="' + item.img + '" alt="' + item.name + '">\
                                </div>\
                            </div>\
                            <div class="promo-case__name cases-sales__case-name">\
                                <span>' + item.name + '</span>\
                            </div>\
                            <div class="promo-case__count"><span>' + item.value_for_filter + '</span></div>\
                            <div class="promo-case__data">\
                                <div><span>открыт ' + item.opening + '</span><span>прибыль ' + item.profit + '</span></div>\
                            </div>\
                            <span class="btn-gray__topleft"></span>\
                            <span class="btn-gray__bottomright"></span>\
                        </div>\
                   </div>';
        });

        return html;
    }

});

