/*===========================================
=            fixed page wrap fun            =
===========================================*/

var windowScrollT;

var fixedPageWrap = function (mode) {
	if (mode == 'on') {
		windowScrollT = $(window).scrollTop();
		$('.page-wrapp').css('margin-top', '-' + windowScrollT + 'px');
	} else {
		$('.page-wrapp').css('margin-top', 0);
		$(window).scrollTop(windowScrollT);
	}
}

/*=====  End of fixed page wrap fun  ======*/

/*==================================
=            modals fix            =
==================================*/
var getScrollBarWidth = function () {
  var inner = document.createElement('p');
  inner.style.height = "200px";
  inner.style.width = "100%";
  var outer = document.createElement('div');
  outer.style.visibility = "hidden";
  outer.style.position = "absolute";
  outer.style.overflow = "hidden";
  outer.style.height = "150px";
  outer.style.width = "200px";
  outer.style.left = "0px";
  outer.style.top = "0px";
  outer.appendChild (inner);
  document.body.appendChild (outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 == w2) w2 = outer.clientWidth;
  document.body.removeChild (outer);
  scrollBarWidth = w1 - w2;
  return scrollBarWidth;
};
var is_scroll = function(){
  return $(document).height() > $(window).height();
};
function centerModal() {
    $(this).css('display', 'block');
    var $dialog  = $(this).find(".modal-dialog"),
    offset       = ($(window).height() - $dialog.height()) / 2,
    bottomMargin = parseInt($dialog.css('marginBottom'), 10);
    if(offset < bottomMargin) offset = bottomMargin;
    $dialog.css("margin-top", offset);
}
$(document).on('show.bs.modal', '.modal', centerModal);
$(window).on("resize", function () {
    $('.modal:visible').each(centerModal);
});
var doModalBackdrop = function (action) {
  if (action == 'create') {
    if ($('body').find('.modal-backdrop').length == 0) {
      $('body').append('<div class="modal-backdrop fade"></div>');
      setTimeout(function () {
        $('body').find('.modal-backdrop').addClass('in');
      }, 1)
    }
  }
  if (action == 'remove') {
    $('body').find('.modal-backdrop').removeClass('in');
    setTimeout(function () {
       $('body').find('.modal-backdrop').remove();
    }, 300)
  }
}
//modal show
$('[data-rossmodal]').on('click', function(event) {
	var m = $(this).attr('href');
	if (m == null || m == "#") {
		m = $(this).attr('data-rossmodal-target');
	}
	if ($(this)[0].hasAttribute("data-rossmodal-noclose")) {
		rossModalOpen(m, false);
	} else {
		rossModalOpen(m);
	}
	event.preventDefault();
});
// close modal
$('[data-dismiss="modal"]').on('click', function(event) {
  rossModalClose();
  event.preventDefault();
});
$(document).click(function(event) {
	if ($('.modal:visible').length > 0) {
		var b = $('body');
		if (b.hasClass('modal-open')) {
			if (!b.hasClass('__modal-noclose')) {
				if ($(event.target).closest('.modal-dialog').length) return;
				if ($(event.target).closest('[data-dismiss="modal"]').length) return;
				if ($(event.target).closest('[data-rossmodal]').length) return;
				rossModalClose();
			}
		}
		event.stopPropagation();
	}
})
var rossModalOpen = function (trigModal, closeFlag) {
	var m = $(trigModal),
		b = $('body'),
		clFalg = true;
	if (closeFlag === false) {
		clFalg = false;
	}
	if ($('.modal:visible').length) {
		$('.modal:visible').modal('hide');
	} else {
		fixedPageWrap('on');
		if (is_scroll()) {
			b.css('padding-right', getScrollBarWidth())
		}
		b.addClass('modal-open');
	}
	m.modal('show');
	doModalBackdrop('create');
	if (clFalg === false) {
		b.addClass('__modal-noclose');
	}
}
var rossModalClose = function () {
	var b = $('body');
	b.css('padding-right', '0px').removeClass('modal-open').removeClass('__modal-noclose');
	$('.modal:visible').modal('hide');
	doModalBackdrop('remove');
	fixedPageWrap('off');
}
/*=====  End of modals fix  ======*/