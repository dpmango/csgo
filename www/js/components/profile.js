$(document).ready(function() {

    $('.js-change-currency').click(function() {
        if($(this).text() == "₽") {
            $(this).text('$');
        } else if ($(this).text() == "$") {
            $(this).text('€');
        } else {
            $(this).text('₽');
        }
    });

});

function validateTrade() {
    var input = $('#trade-link');
    if (input.val() != '123') {
        input.addClass('err-input');
        if(!input.prev().length)
            input.before('<span class="err err-trade">Неправильная трейд-ссылка</span>');

        return false;
    } else {
        input.removeClass('err-input');
        input.parent().find('.err').remove();

        return true;
    }
}