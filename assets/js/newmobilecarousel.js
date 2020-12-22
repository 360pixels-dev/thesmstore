// MOBILE CAROUSELS
// GIFT SECTION
// $(document).ready(() => {
//     $('.mobile-carousel-gift-section__cards').slick({
//      serse,
//         prevArrow: '<button class="mobile-carousel-gift-section__arrows--left" href=""> <img src="./assets/images/icons/m-carousel-arrow-left.svg" alt=""></button>',
//         nextArrow: '<button class="mobile-carousel-gift-section__arrows--right" href=""><img src="./assets/images/icons/m-carousel-arrow-right.svg" alt=""></button>',
//         appendArrows: $('.controllers').html("")
//     });

//     $('.leftArrow').on('click', () => {
//         $('.mobile-carousel-gift-section__cards').slickPrev();
//     });
    
//     $('.rightArrow').on('click', () => {
//         $('.mobile-carousel-gift-section__cards').slickNext();
//     });
// })

const next = '<img src="./assets/images/icons/m-carousel-arrow-right.svg" alt="next">'
const prev = '<img src="./assets/images/icons/m-carousel-arrow-left.svg" alt="prev">'

$(document).ready(function(){
    $('.mobile-carousel-gift-section__cards').owlCarousel({
        margin:6,
        loop:true,
        autoWidth:true,
        items:2,
        nav:true,
        navText: [
            prev, next
        ]
    })
});

// $(document).ready(function(){
//     $('.owl-carousel').owlCarousel({
//         margin:10,
//         loop:true,
//         autoWidth:true,
//         items:2
//     })
// });



// SM CARES

// Slick
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

// Owl-Carousel
// const next = '<img src="./assets/images/icons/m-carousel-arrow-right.svg" alt="next">'
// const prev = '<img src="./assets/images/icons/m-carousel-arrow-left.svg" alt="prev">'

// $(document).ready(function(){
//     $('.mobile-sm-cares__cards').owlCarousel({
//         // margin:6,
//         loop:true,
//         autoWidth:true,
//         items:1,
//         nav:true,
//         navText: [
//             prev, next
//         ]
//     })
// });

