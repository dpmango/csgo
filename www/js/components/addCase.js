$(document).ready(function() {

    //добавление формы для создание элемента
    $('.js-add-case').click(function() {
        var form = $('.add-el__form');
        if(form.css('display') == 'none'){
            var addBlock   = $('.add'),
                outerWidth = addBlock.outerWidth(),
                width      = addBlock.width(),
                cases      = $('.add-case__cases');

            addBlock.animate(
                {
                    "left" : outerWidth + "px",
                    'opacity' : '1'
                },
                {
                    duration: 500,
                    start: function() {
                        cases.css('flex-wrap', 'nowrap');
                    },
                    complete: function() {
                        form
                            .width(width)
                            .fadeIn({
                                duration : 200,
                                complete : function() {

                                    if(addBlock.position().left + addBlock.outerWidth() >  cases.outerWidth() + 20) {
                                        cases.css('flex-wrap', 'wrap');
                                    }

                                    $(this).css({
                                        'position' : 'relative',
                                        'opacity'  : '1'
                                    });

                                    addBlock.css('left', '0');

                                }
                            });

                        nameAutocomplete();
                    }
                }
            );



        }
    });

    // обработка формы для добавления предметов в кейс
    $(document).on('click' , '.js-add-el', function() {

        if(addElValidate()) {
            var name  = $('#el-name').val(),
                chanc = $('#el-chanc').val(),
                form  = $('.add-el__form');

            //отправление данных на сервер
            $.ajax({
                url:'ajax/add_el.php',
                method: 'GET',
                data: {'name' : name, 'chanc' : chanc},
                dataType: "JSON",
                success: function (json) {
                    if(json.success) {
                        $('.add-el__form ').addClass('hide-block');


                        ////отображение созданного элемента
                        form.before(showElem(name, chanc));
                        $(document).find('.new-el')
                            .switchClass(
                                'hidden-block',
                                'visible-block',
                                1000,
                                'easeInOutQuad',
                                function() {
                                    hideForm();
                                    $(this).css('position', 'relative');
                                });

                    }
                }
            });
        }
    });

    //отображение цены при вводе данных
    $(document).on('input' , '#el-name', function() {
        $(document).find('.add-el__price').css('opacity', '1');
        $(document).find('.add-el__price span').css('opacity', '1').text('$3,4');
    });

    //валидация формы додавание предмета в форму
    function addElValidate() {
        var form = [
            {
                id: '#el-name',
                validte: function () {
                    if ($(this.id).val().length < 3) {
                        $(this.id).addClass('err-input');
                        if(!$(this.id).prev().length)
                            $(this.id).before('<span class="err">Неверное название</span>');

                        return false;
                    } else {
                        $(this.id).removeClass('err-input');
                        $(this.id).parent().find('.err').remove();

                        return true;
                    }
                }
            },
            {
                id: '#el-chanc',
                validte: function () {
                    if (!$(this.id).val().length) {
                        $(this.id).addClass('err-input');
                        if(!$(this.id).prev().length)
                            $(this.id).before('<span class="err">Неверное значение</span>');

                        return false;
                    } else {
                        $(this.id).removeClass('err-input');
                        $(this.id).parent().find('.err').remove();

                        return true;
                    }
                }
            }
        ];

        var isValide = validate(form);

        return isValide;
    }


    function validate(form) {
        var err = 0;

        for (var key in form) {

            if (!form[key].validte()) {
                err++;
            }
        }


        if(!err) {
            return true;
        }
        return false;
    }





    $(document).on('click', '.js-del-form', function() {
        hideForm();
    });



    $(document).on('click', '.js-edit', function() {
        var casBlock =  $(this).parent().parent();

        var form = $('#case-actions'),
            top = form.offset().top;

        $('body, html').animate({scrollTop : (top - 150)}, 700);

        $('#case-id').val(casBlock.attr('data-id'));

        form.find('.ccolapse__head__txt span').text('Редактировать кейс');

        $('#case-actions-submit').text('Редактировать кейс');

        //var img = casBlock.find('.promo-case__img__case img').attr('src').split('\\').pop();


        $('#case-name').val(casBlock.find('.promo-case__name span').text());

        $('#case-price').val(casBlock.find('.promo-case__price span').text());

        var categoryId = $(this).closest('.category').attr('data-categoryId');
        $('#case-category option').each(function() {
            if($(this).val() == categoryId) {
                $(this).attr('selected', 'selected');
            }
        });
    });

    //
    $('#case-actions').submit(function(e) {
        e.preventDefault();

        var data = {
            'id' : $('#case-id').val(),
            'img' : $('#case-photo').val(),
            'name' : $('#case-name').val(),
            'price' : $('#case-price').val(),
            'category' : $('#case-category').val()
        };

        $.ajax({
            url:'ajax/action_case.php',
            method: 'GET',
            data: data,
            dataType: "JSON",
            success: function (json) {
                if(json.success) {
                    if($('#case-id').val() == 0) {
                        $('.category[data-categoryId = "' + json.data.category_id + '"] .promo__cases')
                            .append(addCase(json.data));
                    } else {
                        updateCase(json.data);
                    }
                    $(document).find('[data-id="' + json.data.id + '"] .promo-case')
                        .css("border", "1px solid red");
                }
            }
        });

    });


    function addCase(data) {
        var html = '<div data-id="' + data.id + '" class="promo__cases__col __simple">\
                        <div class="promo-case">\
                            <div class="promo-case__img">\
                                <div class="promo-case__img__case"><img src="' + data.img + '" alt=""></div>\
                            </div>\
                            <div class="promo-case__name"><span>' + data.name + '</span></div>\
                            <div class="promo-case__price"><span>' + data.price + '</span></div>\
                            <div class="promo-case__data">\
                                <div><span>открыт 20 раз</span><span>прибыль 5 700 рублей</span></div>\
                            </div>\
                            <div class="promo-case__delete"><span>Удалить кейс?</span></div><span class="btn-gray__topleft"></span><span class="btn-gray__bottomright"></span>\
                        </div>\
                        <div class="promo-case-btn">\
                            <button type="button" class="promo-case-btn__edit js-edit btn btn-action"><i class="zmdi zmdi-edit"></i></button>\
                            <button type="button" class="promo-case-btn__del js-del btn btn-action btn-destr"><i class="zmdi zmdi-delete"></i></button>\
                        </div>\
                        <div class="promo-case-btn-del">\
                            <button type="button" class="promo-case-btn-del__ok js-check-del btn btn-action"><i class="zmdi zmdi-check"></i></button>\
                            <button type="button" class="promo-case-btn-del__no js-cansel-del btn btn-action btn-destr"><i class="zmdi zmdi-close"></i></button>\
                        </div>\
                    </div>';

        return html;
    }

    function updateCase(data) {
        var caseBlock = $('.promo__cases__col[data-id="' + data.id + '"]');

        caseBlock.find('.promo-case__img__case img').attr('src', data.img);
        caseBlock.find('.promo-case__name span').text(data.name);
        caseBlock.find('.promo-case__price span').text(data.price);

    }



    //автокомплит
    function nameAutocomplete() {
        $( "#el-name" ).autocomplete({
            source: [
                "AK-47 | Redline",
                "AWP | Boom",
                "USP-S | Orion"
            ]
        });
    }

    //образования элемента
    function showElem(name, chanc) {
        var html = '<div class="promo__cases__col __simple new-el flex-case-col hidden-block">\
                        <div class="promo-case flex__case">\
                            <div class="promo-case__img">\
                                <div class="promo-case__img__case"><img src="img/content/simple-case.png" alt=""></div>\
                            </div>\
                            <div class="promo-case__name"><span>' + name + '</span></div>\
                            <div class="promo-case__chance">Шанс выпадания<span>' + chanc + '</span></div>\
                            <div class="promo-case__delete"><span>Удалить кейс?</span></div>\
                            <span class="btn-gray__topleft"></span>\
                            <span class="btn-gray__bottomright"></span>\
                        </div>\
                        <div class="promo-case-btn flex__btn">\
                            <button type="button" class="promo-case-btn__edit btn btn-action"><i class="zmdi zmdi-edit"></i></button>\
                            <button type="button" class="promo-case-btn__del js-del btn btn-action btn-destr"><i class="zmdi zmdi-delete"></i></button>\
                        </div>\
                        <div class="promo-case-btn-del flex__btn-del">\
                            <button type="button" class="promo-case-btn-del__ok js-check-del btn btn-action"><i class="zmdi zmdi-check"></i></button>\
                            <button type="button" class="promo-case-btn-del__no js-close-del btn btn-action btn-destr"><i class="zmdi zmdi-close"></i></button>\
                        </div>\
                  </div>';

        return html;
    }

    //сокрытия формы при образовании элемента
    function hideForm() {
        var form = $('.add-el__form ');
        $('.add-el__form ')
            .css({
                'display' : 'none',
                'position' : 'absolute',
                'opacity'  : '0'
            })
            .removeClass('hide-block');

        form.find('input').val('');
    }


});
