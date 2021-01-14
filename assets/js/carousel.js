$(document).ready(function() {
    const right = '<img src="/assets/images/icons/m-carousel-arrow-right.svg" alt="right">'
    const left = '<img src="/assets/images/icons/m-carousel-arrow-left.svg" alt="left">'
    const mRight = '<img src="/assets/images/icons/control-right.svg" alt="mRight">'
    const mLeft = '<img src="/assets/images/icons/control-left.svg" alt="mLeft">'

    // INDEX CAROUSEL - BANNER
    window.addEventListener("load",function() {
        var slides = $('.main-carousel')
        var slideDots = $('.pagination-dot__activator')

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

    // INDEX - FEATURED VIDEO
    $('.featured-video__controls--index .controls__arrow').click(function() {
        var dir = $(this).attr('class').split('--')[1];
        var indexVids = $('.featured-video__content')
        var activeVid = $('.featured-video__content.active').attr('id')

        if(dir == 'right') { //to the right
            $('.featured-video__content').each(function() {
                $(this).removeClass('active');
            });
            $('.featured-video__content').eq(Number(activeVid) + 1).addClass('active');

            // if counter exceeds the number of videos, returns to first index
            if ((Number(activeVid) + 1) > indexVids.length - 1) {
                $('.featured-video__content').eq(0).addClass('active');
            }
        }
        else { //to the left
            $('.featured-video__content').each(function() {
                $(this).removeClass('active');
            });
            $('.featured-video__content').eq(Number(activeVid) - 1).addClass('active');
        }

    });

    // ABOUT US - FEATURED VIDEO
    $('.about-carousel__controls .controls__arrow').click(function() {
        var dir = $(this).attr('class').split('--')[1];
        var aboutFeatured = $('.about-carousel__content')
        var activeDiv = $('.about-carousel__content.active').attr('id')

        if(dir == 'right') { //to the right
            aboutFeatured.each(function() {
                $(this).removeClass('active');
            });
            aboutFeatured.eq(Number(activeDiv) + 1).addClass('active');

            // if counter exceeds the number of videos, returns to first index
            if ((Number(activeDiv) + 1) > aboutFeatured.length - 1) {
                aboutFeatured.eq(0).addClass('active');
            }
        }
        else { //to the left
            aboutFeatured.each(function() {
                $(this).removeClass('active');
            });
            aboutFeatured.eq(Number(activeDiv) - 1).addClass('active');
        }
    });

    // ABOUT US - PRESS RELEASES
    $('.about-carousel-lg__controls .controls__arrow').click(function() {
        var dir = $(this).attr('class').split('--')[1];
        var aboutFeatured = $('.about-carousel-lg__inner-content')
        var activeDiv = $('.about-carousel-lg__inner-content.active').attr('id')

        if(dir == 'right') { //to the right
            aboutFeatured.each(function() {
                $(this).removeClass('active');
            });
            aboutFeatured.eq(Number(activeDiv) + 1).addClass('active');

            // if counter exceeds the number of videos, returns to first index
            if ((Number(activeDiv) + 1) > aboutFeatured.length - 1) {
                aboutFeatured.eq(0).addClass('active');
            }
        }
        else { //to the left
            aboutFeatured.each(function() {
                $(this).removeClass('active');
            });
            aboutFeatured.eq(Number(activeDiv) - 1).addClass('active');
        }
    });

    // GIFT REGISTRY - OWL CAROUSEL
    
    if ($('.gift-available__registry.mobile').length !== 0) {
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
    }

    // GIFT CARDS - OWL CAROUSEL
    // Card Denominations

    if ($('.gift-card__cards.mobile').length !== 0) {
        $('.gift-card__cards.mobile').owlCarousel({
            margin:16,
            loop:true,
            autoWidth:true,
            items:1,
            nav:false,
            dots:false
        })
    }


    // Sleeves
    if ($('.gift-card__sleeves.mobile').length !== 0) {
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
        })
    }

    // GIFT WRAPPING - OWL CAROUSEL
    // Gift Wrappers
    if ($('.gift-wrapping__slider-slides').length !== 0) {
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
    }

    // Box Sizes
    // Desktop
    if ($('.box-sizes__slider-slides.desktop').length !== 0) {
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
    }

    // Mobile
    if ($('.box-sizes__slider-slides.mobile').length !== 0) {
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
    }


    // CATEGORY PAGES
    if ($('.sale--three-cards.mobile').length !== 0) {
        $('.sale--three-cards.mobile').owlCarousel({
            margin:0,
            loop:true,
            autoWidth:false,
            center: true,
            items:1,
            nav:true,
            navText: [
                left, right
            ]
        })
    }

    if ($('.sale--four-cards.mobile').length !== 0) {
        $('.sale--four-cards.mobile').owlCarousel({
            margin:0,
            loop:true,
            autoWidth:false,
            center: true,
            items:1,
            nav:true,
            navText: [
                left, right
            ]
        })
    }

    // SM CARES - FEATURED ADVOCACY
    if ($('.featured-content__slider').length !== 0) {
        $('.featured-content__slider').owlCarousel({
            margin:0,
            loop:false,
            autoWidth:true,
            dots:false,
            items:1,
            nav:true,
            navText: [
                left, right
            ]
        })
    }

    // PRESS RELEASE - FEATURED PRESS
    if ($('.featured-press__slider').length !== 0) {
        $('.featured-press__slider').owlCarousel({
            margin:0,
            loop:false,
            autoWidth:true,
            dots:false,
            items:1,
            nav:true,
            navText: [
                left, right
            ]
        })
    }
})

