document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true, // Enable continuous loop
    });
});

