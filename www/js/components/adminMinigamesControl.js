/* TIMER  */

timeend= new Date();
// IE и FF по разному отрабатывают getYear()
timeend= new Date(2017, 06, 16, 20, 20, 20);
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



$(document).ready(function() {
   $('.js-gransmap-top')
       .css('min-height', $(this).find('.js-gransmap-aside').outerHeight());
});


$('.info__block.active').each(function(index, el) {
    $(this).find('.info__block__cnt').show();
});

$('.info__block__title').on('click', function(e) {
    var th = $(this),
        par = th.closest('.info__block'),
        cnt = par.find('.info__block__cnt');
    if (par.hasClass('active')) {
        par.removeClass('active');
        cnt.slideUp(500);
    } else {
        par.addClass('active');
        cnt.slideDown(500);
    }
    e.preventDefault();
});

$(document).on('change', '.way-list input', function(e) {
    var val = $(event.target).val();

    $('.way-cnt__it').fadeOut(200).fadeIn(200).attr('data-hunt', val);

    resetForm();
});


$('.gransmap__aside__maps a').on('click', function(e) {
    var th = $(this),
        map = $('.gransmap__map__item[data-map="' + th.attr('data-map') + '"]');

    if(map.length) {
        th.closest('li').siblings('li').removeClass('active');
        th.closest('li').addClass('active');

        $('.gransmap__map__item').removeClass('active');
        map.addClass('active');

        resetForm();
    }

    e.preventDefault();
});

function resetForm() {
    var forms = $('.way-data');

    for(var i = 0; i < forms.length; i++) {
        if(forms[i].nodeType == 1) {
            forms[i].reset();
        }
    }

    //$('[name="case-x"]').focus();
}



var caseCoords = {
    x : $(document).find('[name="case-x"]'),
    y : $(document).find('[name="case-y"]')
};

var prizeCoords = {
    x : $(document).find('[name="prize-x"]'),
    y : $(document).find('[name="prize-y"]')
};

var map = $(document).find('.gransmap__map__item.active .minigames-control__map-img');



$(document).on('click', '.gransmap__map__item.active .minigames-control__map-img', function(e) {
    var map = $(event.target);
    var offset = map.offset();

    var position = {
        x : (((e.pageX - offset.left)/$(this).width())*100).toFixed(1),
        y : (((e.pageY - offset.top)/$(this).height())*100).toFixed(1)
    };

    if(map.attr('data-coords') == 'prize') {
        for(var key in position) {
            prizeCoords[key].val(position[key]);
        }
    } else {
        for(var key in position) {
            caseCoords[key].val(position[key]);
        }
    }

});




$(document).on(
    'focus',
    '[name="case-x"], [name="case-y"], [name="prize-x"], [name="prize-y"]',
    function() {addDattaCoords($(event.target))}
);


function addDattaCoords(that) {

    var name = that.attr('name');
    var map = $(document).find('.gransmap__map__item.active .minigames-control__map-img');

    if(name == 'prize-x' || name == 'prize-y')
        map.attr('data-coords', 'prize');
    else
        map.attr('data-coords', 'case');

}




$(document).on('submit', '.js-way-case', function(e) {
    e.preventDefault();
    var wrap = $('.gransmap__map__item.active .gransmap__map__item__img-inner');

    var caseBox = {
        x: $(this).find('[name="case-x"]').val(),
        y: $(this).find('[name="case-y"]').val(),
        img: $(this).find('[name="case-img"]').val(),
        hunt: $('.way-list__it input:checked').val(),
        order: '',
        map: $(document).find('.gransmap__map__item.active').data('map'),
        id: ''
    };


    caseBox.order = wrap.find('[data-hunt="' + caseBox.hunt + '"]').length + 1;

    var caseHtml = '<div id="'+ caseBox.map +'-' + caseBox.hunt + '-'+ caseBox.order +'" data-order="'+ caseBox.order +'" data-hunt="'+ caseBox.hunt +'"  style="top: ' + caseBox.y + '%; left: ' + caseBox.x + '%;" class="gransmap__map__case active create">\
                        <a href="#" class="gransmap__map__case-link">\
                            <span class="gransmap__map__hover"></span>\
                            <img src="'+ caseBox.img +'" class="gransmap__map__case-img">\
                            <div class="gransmap__map__case-price">$ 3.5</div>\
                            <span class="gransmap__map__shadow"></span>\
                        </a>\
                        <div class="gransmap__map__arrow"><span></span></div>\
                    </div>';

    wrap.append(caseHtml);

    drawArrow(caseBox.order, caseBox.hunt, caseBox.map);

});




$(document).on('submit', '.js-way-prize', function(e) {
    e.preventDefault();

    var prizes = [
        {
            "id": "1",
            "color": "__white",
            "model": "M4A4",
            "name": "Buzzkill",
            "img": "img/content/case-rotator-img.png"
        },
        {
            "id": "2",
            "color": "__lightBlue",
            "model": "M4A4",
            "name": "Buzzkill",
            "img": "img/content/case-rotator-img.png"
        },
        {
            "id": "3",
            "color": "__blue",
            "model": "M4A4",
            "name": "Buzzkill",
            "img": "img/content/case-rotator-img.png"
        }
    ];

    var wrap = $('.gransmap__map__item.active .gransmap__map__item__img-inner');

    var prizeBox = {
        x: $(this).find('[name="prize-x"]').val(),
        y: $(this).find('[name="prize-y"]').val(),
        hunt: $('.way-list__it input:checked').val(),
        order:'',
        map: $(document).find('.gransmap__map__item.active').data('map'),
        id: '',
        identef: $(this).find('[name="prize-id"]').val()
    };

    prizeBox.order = wrap.find('[data-hunt="' + prizeBox.hunt + '"]').length + 1;

    prize = prizes.filter(function(item) {
        return item.id == prizeBox.identef;
    });
    prize = prize[0];


    var prizeHtml = '<div id="'+ prizeBox.map + '-' + prizeBox.hunt + '-'+ prizeBox.order +'" data-order="'+ prizeBox.order +'" data-hunt="'+ prizeBox.hunt +'" data-color="__pink"  style="top: ' + prizeBox.y + '%; left: ' + prizeBox.x + '%;" class="winner-el create '+ prize.color +'">\
                        <a href="#">\
                            <div class="winner-el__img-box">\
                                <img src="'+ prize.img +'" alt="" class="winner-el__img">\
                            </div>\
                            <div class="winner-el__model"><span>'+ prize.model +'</span></div>\
                            <div class="winner-el__name"><span>'+ prize.name +'</span></div>\
                        </a>\
                        <div class="gransmap__map__arrow"><span></span></div>\
                    </div>';

    wrap.append(prizeHtml);

    drawArrow(prizeBox.order, prizeBox.hunt,  prizeBox.map);

});


function drawArrow(order, hunt, map) {
    if(order > 1) {
        var caseBox = $(document).find('#' + map + '-'+ hunt + '-' + (order - 1)),
            caseBoxes = $(document).find('[id*="'+map + '-'+ hunt+'"]');
        caseBox.removeClass('create');
        setArrowDirection(caseBox, caseBoxes);
    }
}


Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
};

function setArrowDirection(box, boxes) {
    var block = box,
        order = box.data('order'),
        hunt = box.data('hunt');
        blockPos = box.position(),
        blockPosTop =  blockPos.top + (block.outerHeight() / 2), // количество пикселей от родителя до центру блока по вертикали
        blockPosLeft =  blockPos.left + (block.outerWidth() / 2), // количество пикселей от родителя до центру блока по горизонтали
        arrow = box.find('.gransmap__map__arrow');

    var next = '';
    boxes.each(function() {
        if($(this).data('order') == (+order) + 1) {
            next = $(this);
        }
    });


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

    arrow.css('height', gip - (next.outerWidth()/2) + 3);

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

    arrow.css('transform', 'rotate(' + angle + 'deg)');
}


$(document).on('click', '.js-del-way', function() {
    var hunt = $(this).parent().find('input').val(),
        firstWay = $(this).closest('.gransmap__way').find('.way-list__it:first-child input');

    var els = [
        $(this).closest('.way-list__it'),
        $('.gransmap__map__item.active .gransmap__map__item__img').find('[data-hunt="'+ hunt +'"]')
    ];


    els.map(function(el){
       el.remove();
    });

    firstWay.attr('checked', 'checked');
    firstWay.parent().addClass('checked');
    $('.way-cnt__it').attr('data-hunt', 'hunt1');

    resetForm();
});

$(document).on('click', '.js-add-way', function(e) {
    var that = $(event.target),
        parent = that.closest('.gransmap__way').find('.way-list__its'),
        map = that.closest('.gransmap__map__item').data('map'),
        number = parent.find('.way-list__it').length + 1;

    parent.find('input').removeAttr('checked');
    parent.find('.way-list__lbl').removeClass('checked');

    $('.way-cnt__it').attr('data-hunt', ('hunt' + number) );

    var listItem ='<div class="way-list__it">\
                        <label class="style-radio way-list__lbl checked">Путь ' + number + '\
                            <input type="radio" value="hunt'+ number +'" name="'+ map +'-hunt" checked>\
                        </label>\
                        <button type="button" class="btn btn-action btn-destr js-del-way">\
                            <i class="zmdi zmdi-delete"></i>\
                        </button>\
                   </div>';
    parent.append(listItem);
    resetForm();

});

$(document).ready(function() {
    setMapHeight();
});

$(window).resize(function() {
    setMapHeight();
});


function setMapHeight() {

    var map = $('.js-gransmap-img-h');

    if(window.innerWidth > 619)
        map.css('min-height', $('.js-gransmap-aside').height() );
    else
        map.css('min-height', '' );

}

$('.js-del-map').click(function() {
    var parent = $(this).closest('li'),
        link = $(this).closest('li').find('a');

   $('.gransmap__map__item[data-map='+ link.attr('data-map') +']').fadeOut();

   if(parent.hasClass('active')) {
       if(parent.siblings().length) {

           var nextLink = $(parent.siblings()[0]).find('a'),
               map = $('.gransmap__map__item[data-map="' + nextLink.attr('data-map') + '"]');

           if(map.length) {
               nextLink.closest('li').siblings('li').removeClass('active');
               nextLink.closest('li').addClass('active');

               $('.gransmap__map__item').removeClass('active');
               map.addClass('active');

               resetForm();
           }

       }
   }
    parent.remove();

    $('.js-gransmap-top')
        .css('min-height', $('.js-gransmap-aside').outerHeight());
});
