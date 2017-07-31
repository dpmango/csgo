$(document).ready(function () {
    $(document).find('.style-radio input').each(function() {
        if($(this).is(':checked'))
            $(this).parent().addClass('checked');
    });

   $(document).on('change', '.style-radio input', function(e) {
       var that = $(event.target);
       var name = that.attr('name');
       $('.style-radio [name="' + name + '"]').parent().removeClass('checked');

       if(that.is(':checked'))
           that.parent().addClass('checked');
       else
           that.parent().removeClass('checked');

   });

});