$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/chevron_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src= "img/chevron_right.png"></button>',
      });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab__active)', function() {
        $(this)
          .addClass('catalog__tab__active').siblings().removeClass('catalog__tab__active')
          .closest('div.container').find('div.catalog__content').removeClass
          ('catalog__content_active').eq($(this).index()).addClass
          ('catalog__content_active');
      });

    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn();
    });

    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut();
    });


    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
      });
    });

    $('.feed-form').validate();
    function validateForms(form) {
      $(form).validate({
        rules: {
          name: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "Пожалуйста введите свое имя",
          tel: "Ввведите свой номер телефона",
          email: {
            required: "Пожалуйста введите свою почту",
            email: "Неправильно введен адрес почты"
          }
        }
      });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
    $('input[name=tel]').mask("+7 (999) 999-99-99");

  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn()
      } else {
        $('.pageup').fadeOut()
      }
    });

    $("a[href=#up]").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    new WOW().init();

});
              