var caseInfo = {
    loadingCase: function (page,callback) {
        $.ajax({
            url:page,
            method: 'GET',
            data: {id:1},
            dataType: "HTML",
            success: function (html) {
                callback(html);
            }
        });
    },
    caseItemTop: 0
};


$(document).on('click', '#mainContent .promo-case', function (e) {
    e.preventDefault();
    var self = $(this);

    caseInfo.loadingCase('ajax/case.html', function(html) {
        var main = $('#mainContent'),
            container = $('.content-without-footer .container'),
            wrap = '<div class="contentWrap" ' +
                   '     style="width:10000px"></div>';


        // подгрузка информации о кейсе и прокрутка к ней
        if(!$(document).find('.contentWrap').length) {
            main.wrap(wrap);
        }
        $(document).find('.contentWrap').append(html);

        $(document).find('.contentWrap > div').width(container.width());

        $(document).find('.contentWrap')
            .css({'left': '-' + (container.width() + 10) + 'px'});


            setTimeout(function(){

                main.css('position', 'absolute');

                $(document).find('#caseContent')
                    .css('margin-left', container.width() + 10 + 'px');
            }, 500);





        $(window).resize(function() {
            $(document).find('.contentWrap > div').width(container.width());

            if($(document).find('#caseContent').length){
                $(document).find('.contentWrap')
                    .css({'left': '-' + (container.width() + 10) + 'px'});
            }

            $(document).find('#caseContent')
                .css('margin-left', container.width() + 10 + 'px');
        });





        // перемещение кейса
        if(window.innerWidth > 767) {
            var caseImg = $(document).find('.pcase__top__case__img img'),
                pos     = self.find('.promo-case__img__case').offset();

            caseImg.css({
                'top': pos.top,
                'left': pos.left
            });

            var imgWrap = $(document).find('.pcase__top__case__img'),
                finishPos = imgWrap.offset();

            setTimeout(function () {

                caseImg.css({
                    'top': finishPos.top,
                    'left': finishPos.left - container.width(),
                    'transform': 'scale(1, 1)'
                });
                caseImg.addClass('active');
            }, 10);
            setTimeout(function () {
                caseImg.addClass('arrived');
            }, 500);
        }
        caseInfo.caseItemTop = self.offset().top;

        if(caseInfo.caseItemTop < 1100) {
            $('body, html').animate({scrollTop: 0}, 400);
        } else {
            $('body, html').animate({scrollTop: 0}, 0);
        }


        history.pushState({foo: 'bar'}, 'Case Page', '/www/case.html')

    });


});

$(document).on('click', '#caseContent .pcase__back a', function (e) {
    e.preventDefault();

    var wrap = $(document).find('.contentWrap'),
        caseContent = $(document).find('#caseContent'),
        main = $('#mainContent');

    wrap.css('left', '0');
    main.css('position', 'relative');
    caseContent.remove();

    if(caseInfo.caseItemTop < 1100) {
        $('body, html').animate({scrollTop : (caseInfo.caseItemTop - 300)}, 500);
    } else {
        $('body, html').animate({scrollTop : (caseInfo.caseItemTop - 300)}, 0);
    }


    history.pushState({foo: 'bar'}, 'Case Page', '/www/index.html')
});

