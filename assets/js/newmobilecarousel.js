$(document).ready(() => {
    $('.mobile-carousel-gift-section__cards').slick({
        dots: false,
        infinite: true,
        adaptiveWidth: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        mobileFirst: true,
        centerMode: false,
        prevArrow: '<button class="mobile-carousel-gift-section__arrows--left" href=""> <img src="./assets/images/arrow-tail-left.svg" alt=""></button>',
        nextArrow: '<button class="mobile-carousel-gift-section__arrows--right" href=""><img src="./assets/images/arrow-tail-right.svg" alt=""></button>',
        appendArrows: $('.controllers').html("")
    });

    $('.leftArrow').on('click', () => {
        $('.mobile-carousel-gift-section__cards').slickPrev();
    });
    
    $('.rightArrow').on('click', () => {
        $('.mobile-carousel-gift-section__cards').slickNext();
    });
})

