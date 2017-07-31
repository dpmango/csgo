$(document).ready(function() {

    $('.finance-graph__period input').change(function() {
        var parent = $(this).closest('.finance-graph'),
            val = $(this).val();

        parent.find('.finance-graph__it').removeClass('active');
        $('#' + val).parent().addClass('active');

    });

    CanvasJS.addCultureInfo("ru",
        {
            decimalSeparator: "",
            digitGroupSeparator: "",
            days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
            shortDays: ["Пнд", "Вт", "Ср", "Чтв", "Птн", "Сб", "Вскр"]
        });
});
