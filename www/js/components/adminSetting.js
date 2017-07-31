$(document).ready(function() {
    $('.js-event-edit').click(function() {
        var parent = $(this).parent().parent().parent();

        parent.find('.events-form__price').fadeOut(200, function () {
            parent.find('.events-form__change-name').fadeIn(200);
        });

        parent.find('.events-form__action-block').fadeOut(200, function() {
            parent.find('.events-form__edit-block').fadeIn(200);
        });
    });



    $('.js-events-filter').click(function() {
        $(this).parent().find('.events-filter__cnt').fadeToggle();
    })

});