$('.ccolapse.is-collapse .ccolapse__head__left').on('click', function(e) {
	var par = $(this).closest('.ccolapse'),
		cnt = par.find('.ccolapse__cnt');
	if (par.hasClass('closed')) {
		par.removeClass('closed');
		cnt.slideDown(500);
	} else {
		par.addClass('closed');
		cnt.slideUp(500);
	}
	e.preventDefault();
});

$('.ccolapse.is-collapse .ccolapse__head__plus').on('click', function(e) {
	var par = $(this).closest('.ccolapse'),
		cnt = par.find('.ccolapse__cnt');
	if (par.hasClass('closed')) {
		par.removeClass('closed');
		cnt.slideDown(500);
	} else {
		par.addClass('closed');
		cnt.slideUp(500);
	}
	e.preventDefault();
});