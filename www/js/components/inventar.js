$(document).ready(function() {
    $('.inventar .promo__cases').css('display', 'flex').hide().fadeIn();
    setHeight();

    $(".js-show-more").click(function() {
        var el = $('.inventar .promo__cases'),
            curHeight = el.height(),
            autoHeight = el.css('height', 'auto').height();
        el.height(curHeight).animate({height: autoHeight}, 500);

        $(this).remove();
    });

});


$(window).resize(function() {
    setHeight();
});

function setHeight() {
    if($(".js-show-more").length) {
        var height = $('.inventar .promo__cases .promo__cases__col').height() * 2;
        $('.inventar .promo__cases').css('height', height);
    } else {
        $('.inventar .promo__cases').css('height', 'auto');
    }
}

$(document).ready(function() {

    $('.js-contract-link').click(function() {
        location.href = 'www/contract.html';
    });

    $('.js-convert').click(function() {
        var el =  $('#inventar input[name="inventar"]:checked').parent();
        el.css('display', 'flex');
        el.html('<div class="convert-text">+35p.</div>');
        el.addClass('hideConvertElem')
            .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                $(this).remove();
            });
        window.custom.levelPlus(1);
    });

    $('.js-output').click(function() {

        var els =  $('#inventar input[name="inventar"]:checked').parent();

        if(els.length) {

            var checkedEl = '';

            els.each(function() {
                var el = {
                    img: $(this).find('.inventar__item-img img').attr('src'),
                    name: $(this).find('.inventar__item-name span').text(),
                    subname: $(this).find('.inventar__item-subname span').text(),
                    price: $(this).find('.inventar__item-price span').text()
                };

                checkedEl += '<div class="promo__cases__col __simple flex-case-col">\
                                <div data-id="4" class="pcase__itsincase__item inventar__item __pink active">\
                                    <div class="inventar__item-top-text">StatTrack<span>ТМ</span></div>\
                                    <div class="pcase__itsincase__item__img inventar__item-img">\
                                        <img src="'  + el.img + '" alt="">\
                                    </div>\
                                    <div class="pcase__itsincase__item__name inventar__item-name"><span>'  + el.name + '</span></div>\
                                    <div class="pcase__itsincase__item__subname inventar__item-subname"><span>'  + el.subname + '</span></div>\
                                    <span class="btn-gray__topleft"></span>\
                                    <span class="btn-gray__bottomright"></span>\
                                 </div>\
                            </div>';
            });

            $('#inventarOutput .promo__cases').html(checkedEl);
            $('#inventarOutput').modal();
        }
    });

    $('[name="inventar"]').change(function() {
        var el =  $(this).parent(),
            countField = $('.js-inventar-count'),
            amountField =  $('.js-inventar-amount'),

            priceVal = el.find('.inventar__item-price span').text(),
            price = parseFloat(priceVal.replace(/[^-0-9\,\.]/gim,'').replace(',', '.'));


        if($(this).is(':checked')) {
            $(this).next().addClass('active');

            count = +countField.text() + 1;
            amount = +amountField.text() + price;
        } else {
            $(this).next().removeClass('active');

            count = +countField.text() - 1;
            amount = +amountField.text() - price;
        }

        countField.text(count);
        amountField.text(amount);

    });

    $('#selected').change(function() {
        var els = [
            {
                'img' : 'img/content/case-rotator-img.png',
                'name' : 'M4A4',
                'subname' : 'Buzzkill',
                'price' : '$ 5,5'
            },
            {
                'img' : 'img/content/case-rotator-img.png',
                'name' : 'AK-47 Redline',
                'price' : '$ 5,5'
            }
        ];

        var outputEl = '';
        els.forEach(function(el) {
            outputEl+= '<label class="promo__cases__col __simple flex-case-col">\
                            <input type="checkbox" name="inventar" value="1" data-output="output" class="hidden">\
                            <div data-id="4" class="pcase__itsincase__item inventar__item __pink active">\
                                <div class="inventar__item-top-text">StatTrack<span>ТМ</span></div>\
                                <div class="pcase__itsincase__item__img inventar__item-img">\
                                    <img src="'  + el.img + '" alt="">\
                                </div>\
                                <div class="pcase__itsincase__item__name inventar__item-name"><span>'  + el.name + '</span></div>\
                                <div class="pcase__itsincase__item__subname inventar__item-subname"><span>'  + el.subname + '</span></div>\
                                <div class="pcase__itsincase__item__price inventar__item-price"><span>'  + el.price + '</span></div>\
                                <span class="btn-gray__topleft"></span>\
                                <span class="btn-gray__bottomright"></span>\
                            </div>\
                        </label>';
        });

        if($(this).is(":checked")) {
            $('.inventar__cases, .promo__more').hide();
            $('.inventar__cnt').prepend('<div class="output__cases promo__cases flex-cases">'+ outputEl + '</div>');
            $(document).find('.output__cases').css('display', 'flex').hide().fadeIn(500);
        }  else {
            $(document).find('.output__cases').remove();
            $('.inventar__cases, .promo__more').fadeIn(500);
        }
    });

});






















