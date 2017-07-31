var footerOnBottom = function () {
	var wh = $(window).innerHeight(),
		fwh = $('.footer-wrap').outerHeight();
	$('.content-without-footer').css('min-height', wh - fwh);
}

footerOnBottom();

$(window).on('resize', function () {
	footerOnBottom();
})