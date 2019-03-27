$(function () {

    $('.navbar-toggler').on('click', function () {
        $('.menu').toggleClass('open');
        $('nav.navbar').toggleClass('slidenav');
        $('.nav-bg').toggleClass('navbg-move');
    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop()> 500) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut()
        }
    });

    scroll();
    $('.back-to-top').on('click', function () {
        $('html, body').animate(
            {scrollTop: 0}, 400);
        return false;
    });


    $(this).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

});