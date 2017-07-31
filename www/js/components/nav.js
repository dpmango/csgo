$('.nav__list-trigger button').on('click', function(e) {
	$('.nav__list').toggleClass('active');
	e.preventDefault();
});

$('body').click(function(event) {
    if ($(event.target).closest(".nav__list").length) return;
    $(".nav__list").removeClass('active');
  });