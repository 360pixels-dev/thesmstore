$(document).ready(() => {
    $('.mobile-sm-cares__cards').slick({
        arrows: true,
        mobileFirst: true,
        prevArrow: '<button class="mobile-sm-cares__controllers--left" href=""> <img src="./assets/images/icons/m-carousel-arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="mobile-sm-cares__controllers--right" href=""><img src="./assets/images/icons/m-carousel-arrow-right.svg" alt=""></button>',
        appendArrows: $('.mobile-sm-cares__controllers').html("")
    });

    $('.leftArrow').on('click', () => {
        $('.mobile-sm-cares__cards').slickPrev();
    });
    
    $('.rightArrow').on('click', () => {
        $('.mobile-sm-cares__cards').slickNext();
    });
})

