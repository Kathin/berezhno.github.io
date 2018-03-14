"undefined" != typeof jQuery && jQuery(function($) {
    function o() {
        $(".owl-carousel").owlCarousel({
            items: 4,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            },
            margin: 60,
            nav: true,
            autoplay: !0,
            autoplayTimeout: 5e3,
            loop: !0,
            dots: !1,
            navText: ["&#xf104;","&#xf105;"]
        })
    }
    $("ul.nav li.dropdown").hover(function() {
        $(this).find(".dropdown-menu").stop(!0, !0).delay(100).fadeIn(300)
    }, function() {
        $(this).find(".dropdown-menu").stop(!0, !0).delay(300).fadeOut(300)
    }), $(".dropdown-cart").hover(function() {
        $(this).find(".dropdown-menu").stop(!0, !0).delay(100).fadeIn(300)
    }, function() {
        $(this).find(".dropdown-menu").stop(!0, !0).delay(300).fadeOut(300)
    }), $("body").on("click", '[href="#"], [href=""]', function(o) {
        o.preventDefault()
    }), $("html.no-js").removeClass("no-js").addClass("js-ready"), $("#system-message .close").click(function() {
        return $(this).closest(".alert").animate({
            height: 0,
            opacity: 0,
            MarginBottom: 0
        }, "slow", function() {
            $(this).remove()
        }), !1
    }), $(".owl-carousel").length && o()
});