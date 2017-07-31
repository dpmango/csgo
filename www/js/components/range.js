$(document).ready(function() {

    $(".setting-form__range-slider").slider({
        min: 0,
        max: 100,
        step: 1,
        value: 12,
        slide: function(event, ui) {
            $(".setting-form__range .range__sliderValue")
                .text(ui.value)
                .css({
                    'left' : $('.setting-form__range .ui-slider-handle ').css('left')
                });
        },
        create: function (event, ui) {
            $(".setting-form__range .range__sliderValue")
                .css({
                    'left' : $('.setting-form__range .ui-slider-handle ').css('left')
                });
        }
    });
});

