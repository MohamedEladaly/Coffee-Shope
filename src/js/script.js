$(document).ready(function () {
    $("nav li").on("click", function() {
        $(this).addClass("nav-background").siblings().removeClass("nav-background");
    });

    $("nav li a").on("click", function() {
        var x = $(this).attr("id");
        var y = $("header").outerHeight();
        if (x !== 'Home') y = 0;
        $('html, body').animate({
            scrollTop: $(`.${x}`).offset().top - y
        }, 800);
    });

    $(window).on("load", function() {
        $('.Home .img img').css({ top: '0px', opacity: '1' });
        $('.Home .shop-desc .desc').css({ opacity: '1' });
    });

    $(".ll").on("click", function() {
        $("nav").toggle();
    });

    $(window).on("scroll load", function() {
        var headerHeight = $('header').outerHeight(true);
        var w = $(window).scrollTop() + headerHeight * 2;

        var home = $('.Home').offset().top;
        var about = $('.about').offset().top;
        var gallery = $('.gallery-section').offset().top;
        var menu = $('.menu').offset().top;
        var contact = $('.contact').offset().top;

        if (w >= home && w < about) {
            $('.Home .img img').css({ top: '0px', opacity: '1' });
            $('.Home .shop-desc .desc').css({ opacity: '1' });
            $("nav li a#Home").parent().addClass("nav-background").siblings().removeClass("nav-background");
        } else {
            $('.Home .img img').css({ top: '-200px', opacity: '0.3' });
            $('.Home .shop-desc .desc').css({ opacity: '0.3' });
        }

        if (w >= about && w < gallery) {
            $('.about .about-desc').css({ opacity: '1' });
            $('.about .gallery').fadeIn(2000);
            $("nav li a#about").parent().addClass("nav-background").siblings().removeClass("nav-background");
        } else {
            $('.about .about-desc').css({ opacity: '0.3' });
            $('.about .gallery').fadeOut(2000);
        }

        if (w >= gallery && w < menu) {
            $('.gallery-section .gallery').css({ opacity: '1' });
            $("nav li a#gallery-section").parent().addClass("nav-background").siblings().removeClass("nav-background");
        } else {
            $('.gallery-section .gallery').css({ opacity: '0.2' });
        }

        if (w >= menu && w < contact) {
            $('.menu .card').css({ visibility: 'visible', opacity: '1' });
            $("nav li a#menu").parent().addClass("nav-background").siblings().removeClass("nav-background");
        } else {
            $('.menu .card').css({ visibility: 'hidden', opacity: '0.3' });
        }

        if (w >= contact) {
            $('.contact .contact-info').css({ opacity: '1' });
            $("nav li a#contact").parent().addClass("nav-background").siblings().removeClass("nav-background");
        } else {
            $('.contact .contact-info').css({ opacity: '0.3' });
        }

        $('.Home, .about, .gallery-section, .menu, .contact').each(function() {
            if (w + $(window).height() > $(this).offset().top + 100) {
                $(this).animate({ opacity: 1 }, 600);
            }
        });
    });

    $(".menu .card button").click(function() {
        var h = $('header').outerHeight();
        $('html, body').animate({
            scrollTop: $('.contact').offset().top - h
        }, 800);
    });

    $('body').append('<button class="to-top btn btn-dark w-25 m-auto">↑</button>');
    $('.to-top').css({ position: 'fixed', bottom: '30px', right: '30px', display: 'none' });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) $('.to-top').fadeIn();
        else $('.to-top').fadeOut();
    });

    $('.to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    $('#image').on('slide.bs.carousel', function() {
        $(this).find('.carousel-caption h4').css({ opacity: 0, top: '20px' }).animate({ opacity: 1, top: '0px' }, 500);
    });

    $('.contact .contact-form button').click(function() {
        $('.custom-alert').fadeIn();
        $('.contact-form input, .contact-form textarea').val(' ');
    });

    $('.my-alert button').click(function() {
        $('.custom-alert').fadeOut();
    });
});
