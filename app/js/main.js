$(function() {

    $('.slider-catalog__inner').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        adaptiveHeight: !0,
        lazyLoad: "ondemand",
        prevArrow: '<button class = "slider-blog__item-btn slider-blog__btnprev"><img src = "images/left.svg" alt = "" ></button>',
        nextArrow: '<button class = "slider-blog__item-btn slider-blog__btnnext"><img src = "images/right.svg" alt = "" ></button>',
    });

    function tabsResize() {
        $('.gadgets__item').each(function() {
            if (window.screen.width >= 768) {
                $(this).height($(this).width() + 10);
            } else if (!$(this).hasClass('service')) {
                $(this).height($(this).width());
            }
        });
    }

    $(document).ready(function() {
        tabsResize();
    });
    $(window).on('scroll resize', function() {
        tabsResize();
    });
});