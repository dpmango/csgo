$(document).ready(function () {

    $('.style-checkbox.without-id input, .style-checkbox-s.without-id input').each(function() {
        if($(this).is(':checked'))
            $(this).parent().addClass('checked');
        if($(this).is(':disabled'))
            $(this).parent().addClass('disabled');
    });

    $('.style-checkbox.without-id input, .style-checkbox-s.without-id input').on('change', function() {
        if($(this).is(':checked'))
            $(this).parent().addClass('checked');
        else
            $(this).parent().removeClass('checked');

    }) ;

});