$(document).ready(function () {
    
    $(".main-head").css("min-height", $(window).height());

    $(window).on('load', function () {
        var $loader = $('#loader'),
            $loader__inner = $loader.find('#loader__inner');
        $loader__inner.fadeOut();
        $loader.fadeOut('slow');

    });

    
    $(".menu__btn").click(function () {
        $('#nav-icon3').toggleClass('open');
    });
    $(".menu__btn").click(function () {
        if ($(".menu-drop").is(":visible")) {
            $(".menu-drop").fadeOut(500);

        } else {
            $(".menu-drop").fadeIn(500);
        }
    });

    $(".last-news__content, .news__content").dotdotdot({});


    $(".page-numb:first").addClass("page-active");

    $(".page-numb").click(function (event) {
        $(".page-numb").removeClass("page-active");
        $(this).addClass("page-active");

    });


    var $btnTop = $('#goUp')
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 300) {
            $btnTop.fadeIn();
        } else {
            $btnTop.fadeOut();
        }
    })
    

    $btnTop.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1900);

    });

    // var slides = [

    // "../img/SLIDER/sl-1.jpg",
    // "../img/SLIDER/sl-2.jpg",
    // "../img/SLIDER/sl-3.jpg",
    // "../img/SLIDER/sl-4.jpg"
    // ];

    // $("#bg1").slidesbg({
    //   dataSlide: slides
    // });

    $(".btn-down__link").mPageScroll2id({
        offset:160,
        scrollSpeed: 1500


    });




    // Modernizr.on( 'webp', function( result ) {
    // if ( result ) {
    // console.log(result); // true or false;
    // }
    
    // });





});

