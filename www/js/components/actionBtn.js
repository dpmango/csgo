$(document).ready(function() {
    $(document).on('click', '.js-del', function() {
        var delText = $(this).parent().parent().find('.promo-case__delete'),
            btns    = $(this).parent(),
            delBtns = $(this).parent().next(),
            caseBlock = $(this).parent().parent().find('.promo-case');

        delText.css('display', 'flex').hide().fadeIn(500);
        btns.fadeOut(500, function() {
            delBtns.fadeIn(500);
            caseBlock.addClass('active');
        });
    });


    $(document).on('click', '.js-check-del', function() {
        $(this).parent().parent().fadeOut(500);
        $(this).parent().parent().find('.promo-case').removeClass('active');
    });


    $(document).on('click', '.js-close-del', function() {
        var delText = $(this).parent().parent().find('.promo-case__delete'),
            btns    = $(this).parent().prev(),
            delBtns = $(this).parent(),
            caseBlock = $(this).parent().parent().find('.promo-case');

        delText.fadeOut(500);
        delBtns.fadeOut(500, function() {
            btns.fadeIn(500);
            caseBlock.removeClass('active');
        });
    });
});