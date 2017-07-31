"use strict";

window.custom = {};

/*=======================================
=            SCROLLBAR WIDTH            =
=======================================*/

 window.custom.getScrollBarWidth = function () {
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
  window.custom.scrollBarWidth = w1 - w2;
  return window.custom.scrollBarWidth;
 };
 window.custom.is_scroll = function(){
  return $(document).height() > $(window).height();
 };

 window.custom.getScrollBarWidth();

/*=====  End of SCROLLBAR WIDTH  ======*/

window.custom.getRandomInt = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};



window.custom.balanceMinus = function (val) {
	var wrap = $('.sidebar__user__balance'),
		balTextWrap = wrap.find('.__balanse-num'),
		currBalanse = parseFloat(balTextWrap.attr('data-balance')),
		alertWrap = wrap.find('.__balanse-num__change');

	alertWrap.removeClass('__plus __minus');

	var animationOptions = {
	  useEasing : true,
	  useGrouping : true,
	  separator : ' ',
	  decimal : '.',
	};

	var a = currBalanse - val;
	balTextWrap.attr('data-balance', a);
	var numAnimations = new CountUp("userBalance", currBalanse, a, 0, 1, animationOptions);
	numAnimations.start();
	alertWrap.addClass('active __minus').text(val.toLocaleString('ru-RU'));
	setTimeout(function () {
		alertWrap.removeClass('active');
	}, 1000);
}

window.custom.balancePlus = function (val) {
	var wrap = $('.sidebar__user__balance'),
		balTextWrap = wrap.find('.__balanse-num'),
		currBalanse = parseFloat(balTextWrap.attr('data-balance')),
		alertWrap = wrap.find('.__balanse-num__change');

	alertWrap.removeClass('__plus __minus');

	var animationOptions = {
	  useEasing : true,
	  useGrouping : true,
	  separator : ' ',
	  decimal : '.',
	};


	var a = currBalanse + val;
	balTextWrap.attr('data-balance', a);
	var numAnimations = new CountUp("userBalance", currBalanse, a, 0, 1, animationOptions);
	numAnimations.start();
	alertWrap.addClass('active __plus').text(val.toLocaleString('ru-RU'));
	setTimeout(function () {
		alertWrap.removeClass('active');
	}, 1000);
}

window.custom.levelRanges = [
	{
		'level': '1',
		'from': '0.000',
		'to': '5.000'
	},
	{
		'level': '2',
		'from': '0.000',
		'to': '6.000'
	},
	{
		'level': '3',
		'from': '0.000',
		'to': '7.000'
	},
	{
		'level': '4',
		'from': '0.000',
		'to': '8.000'
	},
	{
		'level': '5',
		'from': '0.000',
		'to': '9.000'
	},
	{
		'level': '6',
		'from': '0.000',
		'to': '10.000'
	},
	{
		'level': '7',
		'from': '0.000',
		'to': '11.000'
	},
	{
		'level': '8',
		'from': '0.000',
		'to': '12.000'
	},
	{
		'level': '9',
		'from': '0.000',
		'to': '13.000'
	},
	{
		'level': '10',
		'from': '0.000',
		'to': '14.000'
	},
	{
		'level': '11',
		'from': '0.000',
		'to': '15.000'
	},
	{
		'level': '12',
		'from': '0.000',
		'to': '16.000'
	},
	{
		'level': '13',
		'from': '0.000',
		'to': '17.000'
	},
	{
		'level': '14',
		'from': '0.000',
		'to': '17.000'
	},
	{
		'level': '15',
		'from': '0.000',
		'to': '19.000'
	}
]

window.custom.levelPlus = function (val) {
	var rangeArr = window.custom.levelRanges;

	$(document).find('.sidebar__user__lvl').each(function(index, el) {
		var wrap = $(this),
			curLvl = parseInt(wrap.attr('data-level')),
			curVal = parseFloat(wrap.attr('data-current')),
			max = parseFloat(wrap.attr('data-to')),
			progressLine = wrap.find('.sidebar__lvl__progress__inn'),
			textWrap = wrap.find('.sidebar__lvl__txt__right'),
			lastLvlv = parseInt(rangeArr[rangeArr.length - 1].level),
			lvl = wrap.find('.sidebar__lvl__num');

		if (curLvl != lastLvlv) {

		    if(val == 'nextLevel') {

                var nextLvl = curLvl + 1,
                    nextTo = rangeArr.filter(function(item) {
                        return item.level == nextLvl;
                    })[0].to;

                progressLine.css({
                    'width': '100%'
                });

                setTimeout(function () {
                    progressLine.attr('style', '');
                    lvl.text(nextLvl);
                    wrap.attr('data-level', nextLvl);
                    wrap.attr('data-to', nextTo);
                    wrap.attr('data-current', '0.000');
                    textWrap.text('0.000' + '/' + wrap.attr('data-to'));
                }, 500);


            } else {

                if (curVal + val >= max) {
                    var nextCur = (curVal + val) - max,
                    	nextLvl = curLvl + 1,
                        nextTo = rangeArr.filter(function(item) {
                            return item.level == nextLvl;
                        })[0].to;

                    progressLine.css({'width': '100%'});

                    setTimeout(function () {

                    	$('#levelModal').modal();

                        var circle = $('.level-modal__num'),
                            curVal = $('.cur-lvl');

                        curVal.text(curLvl);

                    	setTimeout(function() {

                            var step2 = {
                                duration: 500,
                                step: function(now, fx) {
                                    if(now > 0) {
                                        $(this).css('-webkit-transform','scale('+now+')');
                                    }
                                },
                                complete: function() {
                                    $(this).addClass('level-modal__num-new');
                                }
                            };


                            circle.css('position', 'static').animate(
                                {
                                    'opacity' : '0',
                                    'left' : '2'
                                },
                                {
                                    duration: 500,
                                    step: function(now, fx) {
                                        if(now > 0) {
                                            $(this).css('-webkit-transform','scale('+now+')');
                                        }
                                    },
                                    complete: function() {
                                        curVal.text(nextLvl);
                                        $(this)
                                            .animate(
                                                {
                                                    'opacity' : '1',
                                                    'left' : '1'
                                                }, step2)
                                    }
                                });

						}, 600);

                        progressLine.attr('style', '');
                        lvl.text(nextLvl);
                        wrap.attr('data-level', nextLvl);
                        wrap.attr('data-to', nextTo);
                        wrap.attr('data-current', nextCur);
                        textWrap.text('0.000' + '/' + wrap.attr('data-to'));

                        var a = nextCur,
                            perc = 100*a/max;
                        progressLine.css('width', perc + '%');

                    }, 500);





                } else {
                    var a = curVal + val,
                        perc = 100*a/max;
                    wrap.attr('data-current', a.toFixed(3));
                    textWrap.text(a.toFixed(3) + '/' + wrap.attr('data-to'));
                    progressLine.css('width', perc + '%');
                }

            }

		}

	});
}


require.config({
    baseUrl: 'js',
    paths: {
        //// libs
        jquery: 'lib/jquery-1.9.1',
        jquery_ui: 'lib/jquery-ui.min',
        canvasjs: 'lib/canvasjs/canvasjs.min',
        moment: 'lib/moment/moment',
        'kendo.all.min': 'lib/kendo/kendo.all.min',
        'kendo.core.min': 'lib/kendo/kendo.core.min',
        'kendo.culture': 'lib/kendo/cultures/kendo.culture.ru-RU.min',

        //// bs
        bs_affix: 'bs/affix',
        bs_alert: 'bs/alert',
        bs_button: 'bs/button',
        bs_carousel: 'bs/carousel',
        bs_collapse: 'bs/collapse',
        bs_dropdown: 'bs/dropdown',
        bs_modal: 'bs/modal',
        bs_popover: 'bs/popover',
        bs_scrollspy: 'bs/scrollspy',
        bs_tab: 'bs/tab',
        bs_tooltip: 'bs/tooltip',
        bs_transition: 'bs/transition',
        // plugins
        //// modernizr
        modernizr: 'plugins/modernizr',
        //// bs select
        bsselect_js: 'plugins/bootstrap-select',
        //// perfect scroll
        pscroll: 'plugins/perfect-scrollbar.jquery',
        ////
        numAnimation: 'plugins/countUp',
        // parts
        sidebar__part: 'components/sidebar',
        dropside__part: 'components/dropside',
        nav__part: 'components/nav',
        ccollapse__part: 'components/ccollapse',
        footer__part: 'components/footer',
        faq__part: 'components/faq',
        pcase__part: 'components/mainTabs',
        grans__part: 'components/grans',
        profile__part: 'components/profile',
        case__part: 'components/case',
        contract__part: 'components/contract',
        inventar__part: 'components/inventar',
        caseControl__part: 'components/adminCaseControl',
        range__part: 'components/range',
        radio__part: 'components/radio',
        checkbox__part: 'components/checkbox',
        actionBtn__part: 'components/actionBtn',
        earningsDayChart__part: 'components/earningsDayChart',
        streamFundsChart__part: 'components/streamFundsChart',
        openCaseChart__part: 'components/openCaseChart',
        openCase1Chart__part: 'components/openCase1Chart',
        chart__part: 'components/chart',
        casesSales__part: 'components/casesSales',
        addCase__part: 'components/addCase',
        adminSetting__part: 'components/adminSetting',
        modals__part: 'components/modals',
        file__part: 'components/file',
        timer__part: 'components/timer',
        minigamesGrid__part: 'components/minigamesGrid',
        minigamesHunt__part: 'components/minigamesHunt',
        adminUsers__part: 'components/adminUsers',
        adminMinigamesControl__part: 'components/adminMinigamesControl'
    }
});


requirejs(['jquery'], function ($) {

    require(['numAnimation']);

	/*======================================
	 =            DETECT BROWSER            =
	 ======================================*/
    var mobileAndTabletcheck = function() {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };

    // Get IE or Edge browser version
    function detectBrowser() {
        var ua = window.navigator.userAgent,
            html = $('html');
        if (ua.indexOf('MSIE ') > 0) {
            html.addClass('msie msie' + parseInt(ua.substring(ua.indexOf('MSIE ') + 5, ua.indexOf('.', ua.indexOf('MSIE '))), 10));
        };
        if (ua.indexOf('Trident/') > 0) {
            html.addClass('ie ie' + parseInt(ua.substring(ua.indexOf('rv:') + 3, ua.indexOf('.', ua.indexOf('rv:'))), 10));
        };
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            html.addClass('edge');
        };
        if (ua.toLowerCase().indexOf('safari') != -1) {
            if (ua.toLowerCase().indexOf('chrome') > -1) {
                html.addClass('chrome');
            } else {
                html.addClass('safari');
            };
        };
    };
    detectBrowser();

    if (mobileAndTabletcheck()) {
        $('body').addClass('touch-device');
    }

	/*=====  End of DETECT BROWSER  ======*/

    require(['modernizr'], function () {
		/*==================================
		 =            object fit            =
		 ==================================*/
        if ($('.ofit-block').length > 0 && !Modernizr.objectfit) {
            $('.ofit-block').each(function () {
                var src = $(this).find('> img').attr('src');
                $(this).css('background-image','url(' + src + ')');
            })
        }
		/*=====  End of object fit  ======*/
    });


	/*====================================
	 =            selectpicker            =
	 ====================================*/

    if ($('.selectpicker').length > 0) {
        require(['bs_dropdown', 'bsselect_js'], function () {
            $('.selectpicker').selectpicker();
        });
    }

	/*=====  End of selectpicker  ======*/

	/*==================================
	 =            js scrolls            =
	 ==================================*/

    if ($('.js-scroll').length > 0) {
        require(['pscroll'], function () {
            if ($('.sidebar').length > 0) {
                $('.sidebar__inn').perfectScrollbar({
                    suppressScrollX: true
                });
            }

            if ($('.profile__history').length > 0) {
                $('.profile__history').perfectScrollbar({
                    suppressScrollX: true
                });
            }


            if ($('.events__data-table').length > 0) {
                $('.events__data-table').perfectScrollbar({
                    suppressScrollX: true
                });
            }

            if ($('.events-form__data-table').length > 0) {
                $('.events-form__data-table').perfectScrollbar({
                    suppressScrollX: true
                });
            }

            if ($('.bots-form__data-table').length > 0) {
                $('.bots-form__data-table').perfectScrollbar({
                    suppressScrollX: true
                });
            }

            if ($('.t-user').length > 0) {
                $('.t-user').perfectScrollbar({
                    suppressScrollX: true
                });
            }

            if ($('.tbl').length > 0) {
                $('.tbl').perfectScrollbar();
                setScroll();
            }

            $('.t-user').scroll(setScroll);

            function setScroll() {
                var tableH = $('.tbl').height(),
                    wrapH = $('.t-user').height(),
                    wrapS = $('.t-user').scrollTop(),
                    scrollX = $(document).find('.tbl .ps-scrollbar-x-rail');

                var bottom = wrapS == 0 ? tableH - wrapH : tableH - (wrapH + wrapS);

                scrollX.css({
                    'bottom' : bottom
                });
            }

            // resize update
            $(window).on('resize', function () {
                $('.js-scroll').each(function(index, el) {
                    $(this).perfectScrollbar('update');
                });
            })
        });
    }

	/*=====  End of js scrolls  ======*/

	/*=============================
	 =            parts            =
	 =============================*/

    if ($('.sidebar').length > 0) {
        require(['sidebar__part']);
    }

    if ($('.dropside').length > 0) {
        require(['dropside__part']);
    }

    if ($('.nav').length > 0) {
        require(['nav__part']);
    }

    if ($('.ccolapse.is-collapse').length > 0) {
        require(['ccollapse__part']);
    }

    if ($('.footer-wrap').length > 0) {
        require(['footer__part']);
    }

    if ($('.faq__block').length > 0) {
        require(['faq__part']);
    }

    if ($('.pcase, .main-page').length > 0) {
        require(['bs_modal', 'bs_transition'], function () {
            require(['pcase__part']);
        });
    }

    if ($('.modal').length > 0) {
        require(['bs_modal', 'bs_transition']);
    }

    if ($('.gransmap-top').length > 0) {
        require(['grans__part']);
    }

    if ($('.profile').length > 0) {
        require(['profile__part']);
    }

    if ($('.promo__cases').length > 0) {
        require(['case__part']);
    }

    if ($('.contract').length > 0) {
        require(['contract__part']);
    }

    if ($('.inventar').length > 0) {
        require(['inventar__part']);
    }

    if ($('.admin_mainCases').length > 0) {
        require(['caseControl__part']);
    }

    if ($('.range').length > 0) {
        require(['jquery_ui'], function () {
            require(['range__part']);
        });
    }

    if ($('#el-name').length > 0) {
        require(['jquery_ui']);
    }

    if ($('.style-radio').length > 0) {
        require(['radio__part']);
    }

    if ($('.style-checkbox.without-id').length > 0) {
        require(['checkbox__part']);
    }

    if ($('.finance-graph').length > 0) {
        require(['canvasjs'], function() {
            require(['chart__part']);
            require(['earningsDayChart__part']);
            require(['streamFundsChart__part']);
            require(['openCaseChart__part']);
            require(['openCase1Chart__part']);
        });
    }

    if ($('.cases-sales').length > 0) {
        require(['casesSales__part']);
    }

    if ($('#case-actions').length > 0) {
        require(['addCase__part']);
    }
    if($('.setting').length > 0) {
        require(['adminSetting__part']);
    }

    if($('.btn-action').length > 0) {
        require(['actionBtn__part']);
    }

    if($('.modal').length > 0) {
        require(['modals__part']);
    }

    if($('.file').length > 0) {
        require(['file__part']);
    }


    if($('.minigames-grid').length > 0) {
        require(['minigamesGrid__part']);
    }

    if($('.minigames-hunt').length > 0) {
        require(['minigamesHunt__part']);
        require(['pcase__part']);
    }


    if($('.minigames-control').length > 0) {
        require(['adminMinigamesControl__part']);
    }

    if($('.datetimepicker__input').length > 0) {

        require(["kendo.core.min", "kendo.culture", "kendo.all.min"  ], function() {

            $("#datetimepicker-special").kendoDateTimePicker({
                format: "yyyy:MM:dd hh:mm",
                timeFormat: "HH:mm",
                value: new Date(),
                culture: "ru-RU",
                animation: {
                    close: {
                        effects: "fadeOut zoom:out",
                        duration: 300
                    },
                    open: {
                        effects: "fadeIn zoom:in",
                        duration: 300
                    }
                }
            });
            $("#datetimepicker-from").kendoDateTimePicker({
                format: "yyyy:MM:dd hh:mm",
                timeFormat: "HH:mm",
                value: new Date(),
                culture: "ru-RU",
                animation: {
                    close: {
                        effects: "fadeOut zoom:out",
                        duration: 300
                    },
                    open: {
                        effects: "fadeIn zoom:in",
                        duration: 300
                    }
                }
            });
            $("#datetimepicker-to").kendoDateTimePicker({
                format: "yyyy:MM:dd hh:mm",
                timeFormat: "HH:mm",
                value: new Date(),
                culture: "ru-RU",
                animation: {
                    close: {
                        effects: "fadeOut zoom:out",
                        duration: 300
                    },
                    open: {
                        effects: "fadeIn zoom:in",
                        duration: 300
                    }
                }
            });
        });
	}


	/*=====  End of parts  ======*/

});






