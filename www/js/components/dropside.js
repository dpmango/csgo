var generateDemoItem = function (argument) {
	var demoHtml = '',
		colors = ['white',
				  'lightBlue', 
				  'blue', 
				  'purple', 
				  'pink', 
				  'red', 
				  'gold', 
				  'brown'];

	demoHtml += '<a href="#" class="' + '__'+ colors[window.custom.getRandomInt(0, colors.length - 1)] + ' dropside__item __just-added">';
	demoHtml += '	<div class="dropside__item__img"><img src="img/content/dropside-item.png" alt=""></div>';
	demoHtml += '	<div class="dropside__item__name"><span>M4A4 </span></div>';
	demoHtml += '	<div class="dropside__item__subname"><span>Buzzkill</span></div>';
	demoHtml += '	<div class="dropside__item__over">';
	demoHtml += '	  <div class="dropside__item__avatar ofit-block"><img src="img/content/sidebar-user.jpg" alt=""></div>';
	demoHtml += '	  <div class="dropside__item__user"><span>Cape_Code</span></div>';
	demoHtml += '	</div>';
	demoHtml += '</a>';

	return demoHtml;
}

var addLiveDropItem = function () {
	var itemHTML = generateDemoItem(),
		wraper = $('.dropside__items'),
		itemsLength = $('.dropside__item').length;

	var itemObject = $(itemHTML);

	wraper.prepend(itemObject);

	if (itemsLength >= 10) {
		$('.dropside__item').last().fadeOut('500', function() {
			$(this).remove();
		});
	}

	itemObject.css('margin-top', '-' + itemObject.outerHeight() + 'px');

	setTimeout(function () {
		itemObject.removeClass('__just-added');
		itemObject.css('margin-top', 0);
	}, 100);
}

var addNewLiveDropInterval = setInterval(function () {
	addLiveDropItem();
}, 5000)