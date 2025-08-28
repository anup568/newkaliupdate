//Categories Slider Js
jQuery(document).ready(function () {
    jQuery('.slider-celebrations').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        nav: true,
        dots: false
    });
});


jQuery(document).ready(function () {
    jQuery(".cross-btn button").click(function () {
        jQuery(".hiring-notice").slideUp(1000);
    });
});

//banner Slider Js
jQuery(document).ready(function () {
    jQuery('.banner-slider').owlCarousel({
        stagePadding: 250,
        loop: true,
        items: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                stagePadding: 72
            },
            768: {
                stagePadding: 120
            },
            1024: {
                stagePadding: 200
            },

            1320: {
                stagePadding: 300
            },

            1420: {
                stagePadding: 350
            }
        }

    })
});


//Testimonial Slider Js
jQuery(document).ready(function () {
    jQuery('.testimonial-slider').owlCarousel({
        loop: true,
        items: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    })
});


//Partners Slider Js
jQuery(document).ready(function () {
    jQuery('.partners-slider').owlCarousel({
        loop: true,
        items: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        margin: 5,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});

//breath life slider Slider Js
jQuery(document).ready(function () {
    jQuery('.breath-of-life-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        margin: 25,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});

//video-modal Js
jQuery(document).ready(function () {
    jQuery('.modal').on('show.bs.modal', function (event) {
        jQuery(this).find('iframe').attr("src", $(event.relatedTarget).data('url'));
    });
    jQuery('.modal').on('hidden.bs.modal', function (e) {
        jQuery(this).find('iframe').attr("src", "");
    });
    var videoSrc = $(".video-modal iframe").attr("src");
    jQuery('.video-modal').on('show.bs.modal', function () {
        jQuery(".video-modal iframe").attr("src", videoSrc + "?autoplay=1");
    }).on('hidden.bs.modal', function (e) {
        jQuery(".video-modal iframe").attr("src", null);
    });
});


//Hidden-menu
jQuery('.hamburger-menu').click(function () {
    jQuery('.nav-btn').toggleClass('open_menu');
    jQuery(this).toggleClass("current-active");
});
jQuery('.nav-btn .fa-plus').click(function () {
    jQuery(this).parent(".nav-btn .nav-link").toggleClass("current-active");
    jQuery(this).toggleClass("current-active");
});

//Navbar-shrink Js
jQuery(document).ready(function () {
    jQuery(document).on("scroll", function () {
        if (jQuery(document).scrollTop() > 50) {
            jQuery(".navbar").addClass("navbar-shrink");
        } else {
            jQuery(".navbar").removeClass("navbar-shrink");
        }
    });

});

//Glightbox Js
jQuery(document).ready(function () {
    const glightbox = GLightbox({
        openEffect: 'zoom',
        closeEffect: 'fade',
        touchNavigation: false,
        draggable: false,
        cssEfects: {
            fade: {
                in: 'fadeIn',
                out: 'fadeOut'
            },
            zoom: {
                in: 'zoomIn',
                out: 'zoomOut'
            }
        }
    });
});


//Accordion Js
jQuery(".daily-puja-box .text-desc a").hover(function () {
    jQuery(this).closest(".daily-puja-box .item").toggleClass("show-box");
    jQuery(this).closest(".daily-puja").toggleClass("show-box");
});

//Top_button Js
jQuery(document).ready(function () {
    var btn = jQuery('#top_button');
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, '300');
    });
});





jQuery(document).ready(function () {
    jQuery('.slider-Vendors').owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
});

