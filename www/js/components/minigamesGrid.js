$(document).ready(function() {

   $(document).on('click', '.js-grid-case', function(){

       var that = $(this),
           price = parseFloat(that.attr('data-price')),
           el = that.next('.minigames-grid__item');

       that.parent().addClass('open-case');
       that.addClass('del');
       setTimeout(function() {
           that.remove();
           el.fadeIn();
       }, 400);

       window.custom.balanceMinus(price);
   });

   $('.js-sell-case').click(function() {
       $(this).closest('.minigames-grid__item').addClass('selling');
   });

});


/* TIMER  */

timeend= new Date();
// IE и FF по разному отрабатывают getYear()
timeend= new Date(2017, 06, 17, 20, 20, 20);
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