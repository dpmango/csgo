// перемещение кейса
        if(window.innerWidth > 767) {
            var caseImg = $(document).find('.pcase__top__case__img img'),
                pos     = self.find('.promo-case__img__case').offset();
            console.log(self.offset().top);
            console.log(self.offset().left);

            caseImg.css({
                'top': pos.top,
                'left': pos.left
            });

            console.log(caseImg.css('top'));
            console.log(caseImg.css('left'));


            var imgWrap = $(document).find('.pcase__top__case__img'),
                finishPos = imgWrap.offset();


            console.log('imgWrap.pos', imgWrap.css('position'));
            console.log('imgWrap.offset().top', imgWrap.offset().top);
          //  console.log('container.width()', container.width());

            //241.25 початок
            //457,3

            setTimeout(function () {
                caseImg.css({
                    'top': finishPos.top,
                    //'left': '460px',
                    'left': finishPos.left - container.width() ,
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
            $('body, html').animate({scrollTop: 0}, 700);
        } else {
            $('body, html').animate({scrollTop: 0}, 0);
        }


        history.pushState({foo: 'bar'}, 'Case Page', '/www/case.html')