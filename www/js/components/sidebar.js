// sidebar trigger
$('.sidebar__trigger').on('click', function(e) {
	$('.sidebar').toggleClass('opened');
	$('.sidebar-over').toggleClass('active');
	e.preventDefault();
});

$('.sidebar-over').on('click', function(e) {
	$('.sidebar').removeClass('opened');
	$('.sidebar-over').removeClass('active');
	e.preventDefault();
});

// login/logout
$('#loginBtn').on('click', function(e) {
	$('.sidebar__login').hide();
	$('.sidebar__user').show();
	e.preventDefault();
});

$('#logoutBtn').on('click', function(e) {
	$('.sidebar__login').fadeIn(500);
	$('.sidebar__user').hide();
	e.preventDefault();
});


$('.reset-list a').click(function() {
	var popup = $(this).parent().find('.text_popup');

	if(popup.length) {
		console.log(popup.css('display'));
		if(popup.css('visibility') == 'hidden') {
            popup.addClass('visible-popup');
        }	else {
            popup.removeClass('visible-popup');
        }
	}
});
