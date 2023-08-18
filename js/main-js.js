// Слайдер
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


var owl = $('.owl-1slide');
owl.owlCarousel({
    items:1,
    nav: true,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});

var owl2 = $('.owl-2slide');
owl2.owlCarousel({
    items:4,
    nav: false,
    loop:true,
    autoplay:true,
    margin: 20,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{ //Адаптация в зависимости от разрешения экрана
        0:{
            items:1
        },
        720:{
            items:2
        },
        1024:{
            items:3
        },
        1400:{
            items:3
        }}
});


// Бургер-меню
const iconMenu = document.querySelector('.burger_menu');
if (iconMenu){
    const menuBody = document.querySelector('.menu');
    const bodyPanel = document.querySelector('.body');
    iconMenu.addEventListener("click", function(e) {
        menuBody.classList.toggle("menuActivePanel");
        bodyPanel.classList.toggle("menuOpen");
    });
}