$(document).ready(function () {
    /* **** Slider ***** */
    $(".hero-wrp .sinlge-items").slick({
        arrows: true,
        loop: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 4500,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    /* ***** End Slider **** */

    /* **** scrollIt ***** */   
    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: "linear",
        scrollTime: 600,
        activeClass: "active",
        onPageChange: null,
        topOffset: -95,
    });
    /* **** End scrollIt ***** */

    /* **** Navigation Toggle Start **** */
    $(".navbar-collapse a").click(function () {
        $(".navbar-collapse").collapse("hide");
    });
    /* **** Navigation Toggle End **** */

    /* **** sticky **** */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $("header").addClass("nav-new");
        } else {
            $("header").removeClass("nav-new");
        }
    });
    /* **** sticky **** */


    console.clear();

    $(".js-num").each(countUp);

    function countUp() {
        var num = $(this).text();
        var decimal = 0;
        if (num.indexOf(".") > 0) {
            decimal = num.toString().split(".")[1].length;
        }
        $(this)
            .prop("Counter", 0.0)
            .animate(
                {
                    Counter: $(this).text(),
                },
                {
                    duration: 2000,
                    easing: "swing",
                    step: function (now) {
                        $(this).text(parseFloat(now).toFixed(decimal));
                    },
                }
            );
    }
    $(window).scroll(function () {
        var pageTop = $(window).scrollTop();
        $(".js-num").each(function () {
            if ($(this).offset().top < pageTop + $(window).height()) {
                $(this).each(countUp);
                console.log(1);

                $(window).off("scroll");
            }
        });
    });
    

    /* **** AOS **** */
    AOS.init({
        duration: 1000,
        once:true,
    });
    /* **** End AOS **** */
});
