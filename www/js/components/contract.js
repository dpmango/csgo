$(document).ready(function() {

    $('.js-contract-del').click(function() {
        var parent = $(this).parent().parent();
        parent.addClass('del');
        setTimeout(function() {
            parent.remove();
        }, 500);

    });

    var effect = function() {
        return $('#inventarModal').modal();
    };

    $('.contract__btn-add-el').click(function(e) {
        e.preventDefault();

        $('#inventarModal').modal();

        setTimeout(function() {
            $(document).find('.contract-inventar__cases').perfectScrollbar({
                suppressScrollX: true
            });
        }, 700)

    })
});