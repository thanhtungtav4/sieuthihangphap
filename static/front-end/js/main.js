$(document).ready(function(){

    var cate = $('.slide-header .owl-carousel');

    cate.owlCarousel({
        items:1,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        dots: true,
         // nav:true,
        animateOut: 'fadeInDown',
        animateIn: 'bounceInOut',
        smartSpeed:450
        // pagination: true,
    });

     // Custom Button
    $('.nextBtn').click(function() {
        cate.trigger('next.owl.carousel');
    });
    $('.previousBtn').click(function() {
        cate.trigger('prev.owl.carousel');
    });

    var slide = $('.slide .owl-carousel');

    slide.owlCarousel({
        // stagePadding: 50,
        dots: false,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // Custom Button
    $('.customNextBtn').click(function() {
        slide.trigger('next.owl.carousel');
    });
    $('.customPreviousBtn').click(function() {
        slide.trigger('prev.owl.carousel');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
        
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    
    //$('#back-to-top').tooltip('show');
});

