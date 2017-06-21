// переменная для JSON в котором находятся предметы кейса
var caseItemsJSON,
	vinnerObj,
	isOpenedCase = false;

// получаем JSON с файла
$.getJSON( "ajax/caseItemsJSON.json", function( data ) {
 	caseItemsJSON = data.items;
}).done(function () {
	gen5itemsPlaceholder();
	itemsInCaseGenerate();
	// rotatorItemsGenerate();
});

////////////// функции начало

// ф-ия рендомного перемешывания масива
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// ф-ия генерации HTML блока предмиета в ротаторе
var rotatorItemHTMLgenerate = function (item, winner) {
	var blockHTML = "",
		winnerClass = "";
	if (winner == true) {
		winnerClass = " __winner";
	}
	blockHTML += '<div title="' + item.name + ' ' + item.subname + '" data-id="' + item.id + '" class="pcase__preitem ' + item.color + winnerClass +'">';
	blockHTML += 	'<div class="pcase__preitem__img"><img src="' + item.img + '" alt=""></div>';
	blockHTML += 	'<div class="pcase__preitem__name"><span>' + item.name + '</span></div>';
	blockHTML += 	'<div class="pcase__preitem__subname"><span>' + item.subname + '</span></div>';
	blockHTML += '</div>';
	return blockHTML;
}

// ф-ия генерации 5-и предметов для начальной заглушки ротатора
var gen5itemsPlaceholder = function () {
	var JSONitemsLength = caseItemsJSON.length, // сколько в кейсе предметов
		itemsInPlaceholder = 5, // сколько предметов нужно для заглушки
		phaceholderArr = [], // масив предметов заглушки
		preitemsWrap = $('.pcase__rotor__preitems'); // врапер предметов заглушки

	// запихиваем заданое количество рандомных предметов
	// с JSONа с предметами в масив предметов заглушки
	for (var i = 0; i < itemsInPlaceholder; i++) {
		phaceholderArr.push(caseItemsJSON[window.custom.getRandomInt(0, JSONitemsLength - 1)]);
	}

	// очищаем врапер предметов заглушки
	preitemsWrap.empty();
	// генерируем HTML блоки заглушки
	$.each(phaceholderArr,function(index, el) {
		preitemsWrap.append(rotatorItemHTMLgenerate(el));
	});
}

var itemsInCaseGenerate = function () {
	$.each(caseItemsJSON,function(index, el) {
		var itemHTML = '';

		itemHTML += '<div data-id="' + el.id + '" class="pcase__itsincase__item ' + el.color + '">';
		itemHTML += 	'<div class="pcase__itsincase__item__img"><img src="' + el.img + '" alt=""></div>';
		itemHTML += 	'<div class="pcase__itsincase__item__name"><span>' + el.name + '</span></div>';
		itemHTML += 	'<div class="pcase__itsincase__item__subname"><span>' + el.subname + '</span></div>';
		itemHTML += '</div>	';

		$('.pcase__itsincase__items').append(itemHTML);
	});
}

// ф-ия генерации предметов для ротатора
var rotatorItemsGenerate = function () {
	var rotatorArr = [], // масив предметов для ротатора (пока пустой)
		JSONitemsLength = caseItemsJSON.length, // сколько в кейсе предметов
		winnerID = "7", // победный id (для демонстрации задан статически, должен присылатся сервером наверное)
		itemsWrap = $('.pcase__rotor__items__inn'); // врапер предметов ротатора

	itemsWrap.empty().attr('style', '');
	$('.pcase__rotor__items').removeClass('active');
	$('.pcase__rotor').removeClass('__complete');
	$('.pcase__rotor__winitem-wrap').empty();

	// розможаем елементы масива приблизительно к 1000шт если их меньше
	if (JSONitemsLength < 150) {
		var multiplier = Math.floor(150/JSONitemsLength);
		$.each(caseItemsJSON,function(index, el) {
			for (var i = 0; i < multiplier; i++) {
				rotatorArr.push(el);
			}
		});
	} else {
		rotatorArr = caseItemsJSON;
	}

	// рендомно перемешываем масив
	// находим первое вхождение выиграшного предмета в масив
	// чтобы он был дальше 10 но меньше 200
	// если в даных рамках элемент не найден то перемешываем масив снова
	// и повторяем поиск
	var check = false;
	var arrWinIndex;
	while (!check) {
		rotatorArr = shuffle(rotatorArr);
		$.each(rotatorArr,function(index, el) {
			if (el.id == winnerID && index > 5 && index <= 20) {
				arrWinIndex = index;
				check = true;
				return false;
			}
		})
	}

	// перевертаем масив
	rotatorArr.reverse();
	// считаем id выиграшного предмета с учетом перевернутого масива
	arrWinIndex = rotatorArr.length - arrWinIndex - 1;

	// генирируем HTML предметов в ротаторе
	$.each(rotatorArr,function(index, el) {
		if (index == arrWinIndex) {
			itemsWrap.append(rotatorItemHTMLgenerate(el, true));
		} else {
			itemsWrap.append(rotatorItemHTMLgenerate(el));
		}
	});

	vinnerObj = rotatorArr[arrWinIndex];

	// шырина блоков и врапера
	var itemsWidthFun = function () {
		var itemWidth = $('.pcase__rotor__preitems .pcase__preitem').first().outerWidth();
		itemsWrap.find('.pcase__preitem').css('width', itemWidth);
		itemsWrap.css('width', itemWidth * rotatorArr.length);
	}
	itemsWidthFun();
	$(window).on('resize', function() {
		itemsWidthFun();
	});

	$('.pcase__rotor__items').addClass('active');

	rotatorGoToWinner();
}

var rotatorGoToWinner = function () {
	var wrap = $('.pcase__rotor__items__inn'),
		winnerItem = wrap.find('.pcase__preitem.__winner'),
		halfWrap = $('.pcase__rotor__items').outerWidth() / 2, 
		winnerItemPos = winnerItem.position().left,
		randPos = window.custom.getRandomInt(15, parseInt(winnerItem.outerWidth() - 15));
		pos = '-' + (winnerItemPos - halfWrap + randPos) + 'px',
		centerPos = '-' + (winnerItemPos - halfWrap + winnerItem.outerWidth() / 2 + 2) + 'px';


	wrap.css({
		'margin-left': pos,
		'transition': 'margin-left 16000ms cubic-bezier(0.32, 0.64, 0.01, 1)'
	});

	var rotateTimeout1 = setTimeout(function () {
		$('#fastedCase').closest('.pcase__open-btn__wrap').addClass('unactive');
	}, 16000)

	var rotateTimeout2 = setTimeout(function () {
		wrap.css({
			'margin-left': centerPos,
			'transition': 'margin-left 0.7s ease'
		});
	}, 17000)

	var rotateTimeout3 = setTimeout(function () {
		completeRotate();
	}, 18000)

	$('#fastedCase').on('click', function(event) {
		clearTimeout(rotateTimeout1);
		clearTimeout(rotateTimeout2);
		clearTimeout(rotateTimeout3);
		$(this).closest('.pcase__open-btn__wrap').addClass('unactive');
		wrap.css({
			'margin-left': pos,
			'transition': 'none'
		});
		setTimeout(function () {
			wrap.css({
				'margin-left': centerPos,
				'transition': 'margin-left 0.7s ease'
			});
		}, 1000);
		setTimeout(function () {
			completeRotate();
		}, 2000);
		event.preventDefault();
	});


	var winHTML = '';

	winHTML += '<div class="pcase__rotor__winitem ' + vinnerObj.color + '">';
	winHTML +=     '<div class="pcase__preitem__img"><img src="' + vinnerObj.img + '" alt=""></div>';
	winHTML +=     '<div class="pcase__preitem__name"><span>' + vinnerObj.name + '</span></div>';
	winHTML +=     '<div class="pcase__preitem__subname"><span>' + vinnerObj.subname + '</span></div>';
	winHTML +=	   '<div class="pcase__rotor__winitem__btn">';
	winHTML +=		   '<button id="soldWinItem" data-price="' + vinnerObj.price + '" class="btn btn-lblue fw-btn"><span class="btn-gray__topright"></span><span class="btn-gray__bottomleft"></span>продать за ' + parseFloat(vinnerObj.price).toLocaleString('ru-RU') + '<i>₽</i></button>';
	winHTML +=	   '</div>';
	winHTML += '</div>';

	$('.pcase__rotor__winitem-wrap').html(winHTML);





	// console.log(winnerItem.position());

}

var completeRotate = function () {
	var wrap = $('.pcase__rotor');
	wrap.addClass('__complete');
	$('#fastedCase').closest('.pcase__open-btn__wrap').removeClass('unactive active');
	$('#openCase').closest('.pcase__open-btn__wrap').addClass('active');
	isOpenedCase = true;

	$('.pcase__itsincase__items').find('.pcase__itsincase__item[data-id="' + vinnerObj.id + '"]').addClass('active');
}

var createWinnterFlyer = function () {
	var flyerHTML = '',
		cssTop = ($('.pcase__rotor').offset().top - $(window).scrollTop()) + ($('.pcase__rotor').innerHeight() / 2),
		cssLeft = $('.pcase__rotor').offset().left + ($('.pcase__rotor').innerWidth() / 2);
	flyerHTML += '<div style="top: ' + cssTop + 'px; left: ' + cssLeft + 'px;" class="winnerFlyer ' + vinnerObj.color + '">';
    flyerHTML +=   '<div class="pcase__preitem__img"><img src="' + vinnerObj.img + '" alt=""></div>';
    flyerHTML +=   '<div class="pcase__preitem__name"><span>' + vinnerObj.name + '</span></div>';
    flyerHTML +=   '<div class="pcase__preitem__subname"><span>' + vinnerObj.subname + '</span></div>';
    flyerHTML += '</div>';
    $('.sidebar__inn').scrollTop(0);
    $('body').append(flyerHTML);
	setTimeout(function () {
		$('body').find('.winnerFlyer').addClass('active animated');
	}, 10);
	setTimeout(function () {
		$('body').find('.winnerFlyer').addClass('qwert');
	}, 1000);
	setTimeout(function () {
		$('body').find('.winnerFlyer').remove();
	}, 1700);
}

////////////// функции конец

$('#openCase').on('click', function(event) {
	var price = parseFloat($(this).attr('data-price')),
		balance = parseFloat($('.sidebar__user__balance .__balanse-num').attr('data-balance'));
	$('.pcase__itsincase__items').find('.pcase__itsincase__item').removeClass('active');

	if (balance >= price) {
		if (isOpenedCase) {
			createWinnterFlyer();
		}
		window.custom.balanceMinus(price);
		rotatorItemsGenerate();
		$(this).closest('.pcase__open-btn__wrap').removeClass('active');
		$('#fastedCase').closest('.pcase__open-btn__wrap').addClass('active');
		event.preventDefault();
	} else {
		$('#balanceModal').modal('show');
	}

});

$('body').on('click', '#soldWinItem', function(event) {
	$('.pcase__itsincase__items').find('.pcase__itsincase__item').removeClass('active');
	isOpenedCase = false;
	var price = parseFloat($(this).attr('data-price'));
	window.custom.balancePlus(price);
	$('.pcase__rotor__items__inn').empty().attr('style', '');
	$('.pcase__rotor__items').removeClass('active');
	$('.pcase__rotor').removeClass('__complete');
	$('.pcase__rotor__winitem-wrap').empty();
	event.preventDefault();
});
