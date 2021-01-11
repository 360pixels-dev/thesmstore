


$(document).ready(function() {
    const right = '<img src="./assets/images/icons/m-carousel-arrow-right.svg" alt="right">'
    const left = '<img src="./assets/images/icons/m-carousel-arrow-left.svg" alt="left">'
    const mRight = '<img src="./assets/images/icons/control-right.svg" alt="mRight">'
    const mLeft = '<img src="./assets/images/icons/control-left.svg" alt="mLeft">'

    // INDEX CAROUSEL - BANNER
    window.addEventListener("load",function() {
        var slides = $('.main-carousel')
        var slideDots = $('.pagination-dot__activator')
        var slideNum = $('.pagination-dot__indicator').attr('for');
        slideNum = slideNum.substr(slideNum.length - 1);
        // showSlides(slideIndex);
        // myTimer = setInterval(function(){plusSlides(1)}, 4000);

        if (slides.length > 1) {
            clearInterval(interval)

            var counter = 1;


            var interval = setInterval(function() {
                slides.each(function() {
                    $(this).removeClass('active');
                });
                slides.eq(counter).addClass('active');
                slideDots[counter].checked = true
                counter += 1

                if (counter > slides.length - 1) {
                    counter = 0
                }
            }, 5000)   
        }
    })
    
    $('.pagination-dot__indicator').click(function() {
        var slideNum = $(this).attr('for');
        slideNum = slideNum.substr(slideNum.length - 1);
        
        $('.main-carousel').each(function() {
            $(this).removeClass('active');
        });
        $('.main-carousel').eq(slideNum - 1).addClass('active');
    });



    // GIFT REGISTRY - OWL CAROUSEL
    $('.gift-available__registry.mobile').owlCarousel({
        margin:16,
        loop:true,
        autoWidth:true,
        items:1,
        nav:true,
        navText: [
            left, right
        ]
    })

    // GIFT CARDS - OWL CAROUSEL
    // Card Denominations
    $('.gift-card__cards.mobile').owlCarousel({
        margin:16,
        loop:true,
        autoWidth:true,
        items:1,
        nav:false,
        dots:false
    })

    // Sleeves
    $('.gift-card__sleeves.mobile').owlCarousel({
        margin:0,
        loop:false,
        autoWidth:true,
        items:1,
        nav:true,
        navText: [
            mLeft, mRight
        ],
        urlhashListener:true,
        startPosition: 'first'

        // margin:0,
        // loop:false,
        // autoWidth:true,
        // items:1,
        // nav:true,
        // navText: [
        //     mLeft, mRight
        // ],
        // urlhashListener:true,
        // startPosition: 'URLHash'
    })

    // Where to Use
    // $('.gift-card__use-cards').owlCarousel({
    //     margin:16,
    //     loop:true,
    //     autoWidth:true,
    //     items:1,
    //     nav:true,
    //     navText: [
    //         left, right
    //     ],
    //     dots:false
    // })

    // $('.gift-card__buy-cards').owlCarousel({
    //     margin:0,
    //     loop:true,
    //     autoWidth:true,
    //     items:1,
    //     nav:true,
    //     navText: [
    //         left, right
    //     ],
    //     dots:false
    // })

    // GIFT WRAPPING - OWL CAROUSEL
    // Gift Wrappers
    $('.gift-wrapping__slider-slides').owlCarousel({
        margin:16,
        loop:true,
        autoWidth:true,
        items:1,
        nav:true,
        navText: [
            left, right
        ]
    })

    // Box Sizes
    // Desktop
    $('.box-sizes__slider-slides.desktop').owlCarousel({
        margin:16,
        loop:true,
        autoWidth:true,
        items:1,
        nav:true,
        navText: [
            left, right
        ]
    })

    // Mobile
    $('.box-sizes__slider-slides.mobile').owlCarousel({
        margin:16,
        loop:false,
        autoWidth:true,
        items:1,
        nav:true,
        navText: [
            mLeft, mRight
        ],
        urlhashListener:true,
        startPosition: 'URLHash'
    })
})

