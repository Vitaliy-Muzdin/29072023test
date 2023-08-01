var $document = $(document),
    $jQuery = jQuery(document);


/*~~~~  Скрипт форм сайта 'обратная связь'  ~~~~*/
$jQuery.ready(function($) {
    var $form = $("form.callForm");
    var $modal = $('#modalWindowOfThanks');
    var $doc = $(document);

    $doc.bind('click touch', function(e){
        var $target = $(e.target);
        var $closest = $target.closest($modal);
        if($closest.length)return;
        $modal.removeClass('open');
    });

    $modal.find('.modalClose').bind('click touch', function(e){
        e.preventDefault();
        e.stopPropagation();
        $modal.removeClass('open');
        return false;
    });


    /*~~~~  Скрипт формы 'Отправить форму'  ~~~~*/
    $form.submit(function(e) {
        var base_url = window.location.origin;
        var ths = $(this);
        e.preventDefault();
        e.stopPropagation();

        $modal.addClass('open');
        var $response = $modal.find('.responseText');
        $response.text('Загрузка...');

        var formData = new FormData();


        //присоединяем наш файл
        /*jQuery.each($('#uploaded_file')[0].files, function(i, file) {
         formData.append('file_' + i, file);
         });*/

        //присоединяем остальные поля
        formData.append('name', $('#callForm [name=name]').val());
        formData.append('tel', $('#callForm [name=tel]').val());

        $.ajax({
            type: "POST",
            url: base_url+"/../mail/mail_form.php",
            //dataType : "json",
            cache: false,
            contentType: false,
            processData: false,
            data: formData //указываем что отправляем
            //data: $(this).serialize()
        }).done(function(responseText) {
            //alert(text);
            var response = {};
            try{
                response = JSON.parse(responseText);
            }catch(ex){
                console.warn(ex);
            }
            /*console.log('responseText', responseText, response);*/
            $response.html(response.message);

            if(!response.success)return;

            setTimeout(function() {
                //var magnificPopup = $.magnificPopup.instance;
                //magnificPopup.close();
                ths.trigger("reset");
            }, 1000);
        });
        return false;
    });
    /*~~~~  Скрипт формы^  ~~~~*/
});
/*~~~~  Скрипт формы 'Отправить форму'^  ~~~~*/





$jQuery.ready(function($) {
    /*~~~~  Скрипт основного слайдера owl  ~~~~*/
    $('#owlCarousel').owlCarousel({
        nav : true,
        navText: ["<img src='/assets/img/reviews/left.svg'>","<img src='/assets/img/reviews/right.svg'>"],
        stagePadding: 0,
        margin: 0,
        Boolean: true,
        loop: true, // Зацикливаем слайдер
        items: 1,
        slideSpeed: 1700, // Скорость перелистования слайда
        paginationSpeed: 1700, // Скорость перелистования при пагинации
        autoplay: true,
        autoplaySpeed: 1700,
        smartSpeed: 1200, //Время движения слайда
        autoplayTimeout: 17000, //Время смены слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
    /*~~~~  Скрипт основного слайдера owl^  ~~~~*/


    /*~~~~  Скрипт модального окна верхнего меню  ~~~~*/
    $(".header__burger").click(function(){
        $(".header__menu").toggleClass("active");
        $(".menuMbBg").toggleClass("active");
    });
    $(".menuMb__close").click(function(){
        $(".header__menu").removeClass("active");
        $(".menuMbBg").removeClass("active");
    });
    $(".menuMbBg").click(function(){
        $(".header__menu").removeClass("active");
        $(".menuMbBg").removeClass("active");
    });

    $(".header__menu li a").click(function(){
        $(".header__menu").removeClass("active");
        $(".menuMbBg").removeClass("active");
    });
    /*~~~~  Скрипт модального окна верхнего меню^  ~~~~*/
});


$document.ready(function($) {
    /*~~~~  Скрипт маска для поля телефона, формы обратной связи  ~~~~*/
    $(function(){
        //2. Получить элемент, к которому необходимо добавить маску
        $("#callForm__phone").mask("+7 (999) 999 — 99 — 99");
    });
    /*~~~~  Скрипт маска для поля телефона, формы обратной связи^  ~~~~*/
});


/*~~~~  Скрипт 'Кнопки вверх'  ~~~~*/
$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 170) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},700);
    return false;
  });
});
/*~~~~  Скрипт 'Кнопки вверх'^  ~~~~*/




/*~~~~  Скрипт табов страницы 'Вопрос-ответ'  ~~~~*/
(function(tabsScript){
    tabsScript('ul.tabs').on('click', 'li', function () {
        tabsScript(this).addClass('active').siblings().removeClass('active');
    });
}(jQuery));
/*~~~~  Скрипт табов страницы 'Вопрос-ответ'^  ~~~~*/



/*~~~~  Скрипт плавного скроллинка к блокам, при щелчке по пунктам меню^  ~~~~*/
const anchors = document.querySelectorAll('.menuMb ul li a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
/*~~~~  Скрипт плавного скроллинка к блокам, при щелчке по пунктам меню^  ~~~~*/



/*~~~~  Скрипт активной кнопки 'Отправить', после клика по checkbox  ~~~~*/
$('#checkboxOpen').click(function(){
    if($(this).prop('checked') == true) {
        $('input[type="submit"]').prop('disabled', false);
    } else{
        $('input[type="submit"]').prop('disabled', true);
    }
});
/*~~~~  Скрипт активной кнопки 'Отправить', после клика по checkbox^  ~~~~*/





