// $(document).ready(()=> {
//     console.log("hello world")
//     setTimeout(() => {
//         //$(".logo-max, .toppreview-gauche").css("display","none");
//         //$(".header").css("display","flex");
//     }, 3000);
// });

//$(function(){mesinstructions}); même chose qu'au dessus.

$(document).ready(() => {

    $('body').hide().fadeIn(300);

    //Ancres jquery
    $(".bouton").click(function (e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({ 'scrollTop': $(aid).offset().top }, 'slow');
    });



    // Init scrollmagic
    var controller = new ScrollMagic.Controller();
    console.log(controller)

    //Build a pin (fixed element) : not working yet
    var stepsPin = new ScrollMagic.Scene({
        triggerElement: '.path',
        duration: '95%'
    })
        .setPin('.path')
        .addTo(controller);

    //Build a scene for nav
    var navScene = new ScrollMagic.Scene({
        triggerElement: '#trigger01',
        triggerHook: 0.1
    })
        .setClassToggle('#menu', 'fade-in') //add class to menu
        .addTo(controller);

    //Fade-in div expériences et formations
    $('.specrow').each(function () {

        console.log(this);

        var ourScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.9,

        })
            .setClassToggle(this, 'fade-in')
            .addTo(controller);
    })

    //Tween divers
    var tweenScene = new ScrollMagic.Scene({
        triggerElement: '.divers'
    })
        .setTween(TweenMax.to(".divers", 1, { scale: 0.7, y: '-=100' }))
        .addTo(controller);

    //Tween contact
    var tweenScene = new ScrollMagic.Scene({
        triggerElement: '.contact',
        triggerHook: 0.8,
        reverse: true
    })
        .setTween(TweenLite.to('.contact', 0.7, { scale: 1.2, y: '-=230', ease: Linear.easeNone }))
        .addTo(controller);

    //fade-in/fade-out menu
    $(function () {
        var lastScrollTop = 0, delta = 5;
        $(window).scroll(function (event) {
            var st = $(this).scrollTop();

            if (Math.abs(lastScrollTop - st) <= delta)
                return;
            if (st > lastScrollTop) {
                $('#menu').toggleClass("menu-hidden", true)
            }
            else {
                $('#menu').toggleClass("menu-hidden", false)
            }
            lastScrollTop = st;
        });
    });
});