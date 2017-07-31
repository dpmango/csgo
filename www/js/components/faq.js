$('.faq__block.active').each(function(index, el) {
	$(this).find('.faq__block__cnt').show();
});

$('.faq__block__title').on('click', function(e) {
	var th = $(this),
		par = th.closest('.faq__block'),
		cnt = par.find('.faq__block__cnt');
	if (par.hasClass('active')) {
		par.removeClass('active');
		cnt.slideUp(500);
	} else {
		par.addClass('active');
		cnt.slideDown(500);
	}
	e.preventDefault();
});