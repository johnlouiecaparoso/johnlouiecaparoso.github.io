//window scroll

$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 100){
        $('body').addClass('fixed-header');
    } else{
        $('body').removeClass('fixed-header')
    }
});

//Document Ready
$(document).ready(function(){

    //typing animation
    new Typed('#type-it',{
        strings: ['Developer', 'Designer', 'Freelancer'],
        typeSpeed: 50,
        loop: true
    });

    //Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 2,
        margin:30,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            },
        }
    });

    //one page scroll
    $.scrollIt({
        easing: 'linear',      // the easing function for animation
        topOffset: -70           // offste (in px) for fixed top navigation
      });
});