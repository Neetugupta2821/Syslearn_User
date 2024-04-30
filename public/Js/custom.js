var swiper = new Swiper(".mySwiperBestDr", {
    slidesPerView: 4,
    cssMode: true,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay:3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});


var swiper = new Swiper(".our_Values_SwiperBestDr", {
    slidesPerView: 1,
    loop: true,
    cssMode: true,
    spaceBetween: 10,
    autoplay: {
        delay:2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 1,
            spaceBetween: 50,
        },
    },
});


var swiper = new Swiper(".mySwiperBanner", {
    slidesPerView: 4,
    cssMode: true,
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 0,
        },

    },
});
