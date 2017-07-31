$(document).ready(function() {

   $('.promo-case-btn__edit').hover(function () {
       $(this).parent().prev().addClass('active');
   }, function() {
       $(this).parent().prev().removeClass('active');
   }) ;

   $('.js-show-desc').click(function() {
       $(this).parent().find('.add-block__desc-text').slideToggle();
       $(this).toggleClass('active');

       autoGrow.style.height = "5px";
       autoGrow.style.height = (autoGrow.scrollHeight)+"px";
   });

});

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}