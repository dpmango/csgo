/* TIMER  */

timeend= new Date();
// IE и FF по разному отрабатывают getYear()
timeend= new Date(2017, 06, 11, 20, 20, 20);
// для задания обратного отсчета до определенной даты укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ);
// Для задания даты с точностью до времени укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАСЫ-1, МИНУТЫ);
function time() {
    today = new Date();
    today = Math.floor((timeend-today)/1000);
    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
    thour=today%24; today=Math.floor(today/24);

    timestr = thour + ':' + tmin + ':' + tsec;

    document.getElementById('timer').innerHTML=timestr;
    window.setTimeout("time()",1000);
}

$(document).ready(time);

/* end TIMER  */



Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
};

$(document).ready(function () {

    $('.gransmap__map__arrow').each(function() {
        $(this).fadeIn();
        var block = $(this).closest('.gransmap__map__case, .winner-el'),
            order = block.data('order'),
            hunt = block.data('hunt');
            blockPos = block.position(),
            blockPosTop =  blockPos.top + (block.outerHeight() / 2), // количество пикселей от родителя до центру блока по вертикали
            blockPosLeft =  blockPos.left + (block.outerWidth() / 2); // количество пикселей от родителя до центру блока по горизонтали


        var next = '';
        $('[data-hunt="' + hunt + '"]').each(function() {
           if($(this).data('order') == (+order) + 1) {
               next = $(this);
           }
        });

        if(next.length) {
            var nextPos = next.position(),
                nextPosTop = nextPos.top + (next.outerHeight() / 2), // количество пикселей от родителя до центру блока по вертикали
                nextPosLeft = nextPos.left + (next.outerWidth() / 2); // количество пикселей от родителя до центру блока по горизонтали


            if (nextPosTop == blockPosTop) {
                nextPosTop = nextPosTop + 1;
            }

            if (nextPosLeft == blockPosLeft) {
                nextPosLeft = nextPosLeft + 1;
            }

            // блоки находятся не на одной оси
            var cat1, cat2, gip;
            // длинна первого катета
            if (nextPosTop > blockPosTop) {
                cat1 = nextPosTop - blockPosTop;
            } else {
                cat1 = blockPosTop - nextPosTop;
            }
            // длинна второго катета
            if (nextPosLeft > blockPosLeft) {
                cat2 = nextPosLeft - blockPosLeft;
            } else {
                cat2 = blockPosLeft - nextPosLeft;
            }
            // длинна гипотенузы
            gip = Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2));

            $(this).css('height', gip - (next.outerWidth()/2) + 3);


            var qwe = cat2/gip;
            var acrsin =  Math.asin(qwe);
            var angle = Math.degrees(acrsin);

            if (nextPosTop < blockPosTop && nextPosLeft > blockPosLeft) {
                // do nothing
            } else if (nextPosTop < blockPosTop && nextPosLeft < blockPosLeft) {
                angle = -angle;
            } else if (nextPosTop > blockPosTop && nextPosLeft < blockPosLeft){
                angle = angle + 180;
            } else {
                angle = -angle + 180;
            }

            $(this).css('transform', 'rotate(' + angle + 'deg)');
        } else {
            $(this).css('display', 'none');
        }


    });



    $('.gransmap__map__case a').click(function(e) {
        e.preventDefault();
        if ($(this).parent().hasClass('active')) {
            var top = $('.pcase__rotor').offset().top;
            $('body, html').animate({scrollTop : top - 150}, 300);
        }
    });

    $('.winner-el a').click(function(e) {
            e.preventDefault();

            var flyerHTML = '',
                cssTop = ($(this).offset().top - $(window).scrollTop()) + ($(this).innerHeight() / 2),
                cssLeft = $(this).offset().left + ($(this).innerWidth() / 2),
                color = $(this).parent().data('color'),
                img = $(this).find('.winner-el__img').attr('src'),
                name = $(this).find('.winner-el__model span').text(),
                subname = $(this).find('.winner-el__name span').text();


            flyerHTML += '<div style="top: ' + cssTop + 'px; left: ' + cssLeft + 'px;" class="winnerFlyer ' + color + '">';
            flyerHTML +=   '<div class="pcase__preitem__img"><img src="' + img + '" alt=""></div>';
            flyerHTML +=   '<div class="pcase__preitem__name"><span>' + name + '</span></div>';
            flyerHTML +=   '<div class="pcase__preitem__subname"><span>' + subname + '</span></div>';
            flyerHTML += '</div>';
            $('.sidebar__inn').scrollTop(0);
            $('body').append(flyerHTML);
            setTimeout(function () {
                $('body').find('.winnerFlyer').addClass('active animated');
            }, 10);
            setTimeout(function () {
                $('body').find('.winnerFlyer').addClass('qwert');
            }, 1000);
            setTimeout(function () {
               // $('body').find('.winnerFlyer').remove();
            }, 1700);

    });



});