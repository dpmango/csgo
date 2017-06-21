Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};

$('.gransmap__aside__maps a').on('click', function(e) {
	var th = $(this),
		map = th.attr('data-map');

	th.closest('li').siblings('li').removeClass('active');
	th.closest('li').addClass('active');

	$('.gransmap__map__item').removeClass('active');
	$('.gransmap__map__item[data-map="' + map + '"]').addClass('active');
	e.preventDefault();
});

$('.gransmap__aside__grans a').on('click', function(e) {
	var th = $(this),
		type = th.attr('data-gran');

	th.closest('li').siblings('li').removeClass('active');
	th.closest('li').addClass('active');

	$('.gransmap__map__granitem').removeClass('active');
	$('.gransmap__map__granitem[data-gran="' + type + '"]').addClass('active');
	e.preventDefault();
});

$('.gransmap__map__granitem a').on('mouseover', function () {
	var granBlock = $(this),
		granPos = granBlock.position(),
		granPosTop = granPos.top + (granBlock.outerHeight() / 2), // количество пикселей от родителя до центру блока по вертикали
		granPosLeft = granPos.left + (granBlock.outerWidth() / 2), // количество пикселей от родителя до центру блока по горизонтали
		playerBlock = granBlock.siblings('.gransmap__map__granitem__player'),
		playerPos = playerBlock.position(),
		playerPosTop =  playerPos.top + (playerBlock.outerHeight() / 2), // количество пикселей от родителя до центру блока по вертикали
		playerPosLeft =  playerPos.left + (playerBlock.outerWidth() / 2), // количество пикселей от родителя до центру блока по горизонтали
		arrow = playerBlock.find('.gransmap__map__granitem__arrow');



	if (granPosTop == playerPosTop) {
		granPosTop = granPosTop + 1;
	}

	if (granPosLeft == playerPosLeft) {
		granPosLeft = granPosLeft + 1;
	}

	// блоки находятся не на одной оси
	var cat1, cat2, gip;
	// длинна первого катета
	if (granPosTop > playerPosTop) {
		cat1 = granPosTop - playerPosTop;
	} else {
		cat1 = playerPosTop - granPosTop;
	}
	// длинна второго катета
	if (granPosLeft > playerPosLeft) {
		cat2 = granPosLeft - playerPosLeft;
	} else {
		cat2 = playerPosLeft - granPosLeft;
	}
	// длинна гипотенузы
	gip = Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2));
	arrow.css('height', gip - 40);


	var qwe = cat2/gip;
	var acrsin =  Math.asin(qwe);
	var angle = Math.degrees(acrsin);

	if (granPosTop < playerPosTop && granPosLeft > playerPosLeft) {
		// do nothing
	} else if (granPosTop < playerPosTop && granPosLeft < playerPosLeft) {
		angle = -angle;
	} else if (granPosTop > playerPosTop && granPosLeft < playerPosLeft){
		angle = angle + 180;
	} else {
		angle = -angle + 180;
	}

	arrow.css('transform', 'rotate(' + angle + 'deg)');

}).on('mouseout', function () {
	var granBlock = $(this),
		playerBlock = granBlock.siblings('.gransmap__map__granitem__player'),
		arrow = playerBlock.find('.gransmap__map__granitem__arrow');

	if (!granBlock.closest('.gransmap__map__granitem').hasClass('selected')) {
		arrow.css('height', 70);
	}

})

$('.gransmap__map__granitem a').on('click', function (e) {
	var th = $(this),
		par = th.closest('.gransmap__map__granitem'),
		video = par.attr('data-video'),
		img = par.attr('data-videoimg');

	$('.gransmap__map__granitem').removeClass('selected');
	$('.gransmap__map__granitem').not(par).find('.gransmap__map__granitem__arrow').css('height', 70);
	th.closest('.gransmap__map__granitem').addClass('selected');

	$('.gransmap-video__wrap').removeClass('active').attr('data-video', video);
	$('.gransmap-video__wrap__video').empty();
	$('.gransmap-video__wrap__holder__img img').attr('src', img);

	$('body, html').animate({ scrollTop: $('.gransmap-video').offset().top - 30 }, '500', 'swing');

	e.preventDefault();
})

$('.gransmap-video__play').on('click', function(e) {
	var th = $(this),
		par = th.closest('.gransmap-video__wrap'),
		video = par.attr('data-video'),
		videoWrap = par.find('.gransmap-video__wrap__video'),
		videoHTML = '<iframe src="' + video + '?autoplay=1" frameborder="0" allowfullscreen>'

	par.addClass('active');
	videoWrap.append(videoHTML);
	e.preventDefault();
});