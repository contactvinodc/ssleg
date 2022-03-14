$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 60) {
        $(".clearHeader").addClass("whiteHeader");
    } else {
        $(".clearHeader").removeClass("whiteHeader");
    }
});


$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 5,
        autoplay: true,
        autoPlay: 2000,
        autoplayHoverPause: true,
        stopOnHover: false,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            300:{
                items:2
            },
            768:{
                items:3
            },
            991:{
                items:4
            },
            1199:{
                items:5
            }
        }
    })
    $('.projects').owlCarousel({
        items: 4,
        autoplay: true,
        autoPlay: 3000,
        autoplayHoverPause: true,
        stopOnHover: false,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            300:{
                items:2
            },
            768:{
                items:2
            },
            991:{
                items:3
            },
            1199:{
                items:4
            }
        }
    })
    $('.clients1').owlCarousel({
        items: 6,
        autoplay: true,
        autoPlay: 2500,
        autoplayHoverPause: true,
        stopOnHover: false,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            300:{
                items:2
            },
            768:{
                items:4
            },
            991:{
                items:5
            },
            1199:{
                items:6
            }
        }
    })
    AOS.init({
        easing: 'ease-in-out-sine'
    });
});


$('[data-fancybox]').fancybox({
protect: true,
buttons : [
'zoom',
'thumbs',
'close'
]
});
$('[data-fancybox="watermark"]').fancybox({
protect    : true,
slideClass : 'watermark',
toolbar    : false,
smallBtn   : true
});

// Preload watermark image
// Please, use your own image
(new Image()).src = "http://fancyapps.com/GJbkSPU.png";




/* partners  */

$(document).ready(function() {
    $('.partners1').owlCarousel({
        items: 5,
        autoplay: true,
        autoPlay: 2500,
        autoplayHoverPause: true,
        stopOnHover: false,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            300:{
                items:2
            },
            768:{
                items:4
            },
            991:{
                items:5
            },
            1199:{
                items:5
            }
        }
    })
    AOS.init({
        easing: 'ease-in-out-sine'
    });
});








