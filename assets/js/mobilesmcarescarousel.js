$(document).ready(() => {
    $('.mobile-sm-cares__cards').slick({
        arrows: true,
        mobileFirst: true,
        prevArrow: '<button class="mobile-sm-cares__arrows--left" href=""> <img src="./assets/images/arrow-tail-left.svg" alt=""></button>',
        nextArrow: '<button class="mobile-sm-cares__arrows--right" href=""><img src="./assets/images/arrow-tail-right.svg" alt=""></button>',
        appendArrows: $('.controllers').html("")
    });

    $('.leftArrow').on('click', () => {
        $('.mobile-sm-cares__cards').slickPrev();
    });
    
    $('.rightArrow').on('click', () => {
        $('.mobile-sm-cares__cards').slickNext();
    });
})

