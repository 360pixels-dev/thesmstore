$(document).ready(function() {

    // TOGGLE BURGER MENU
    $('.burger-menu').click(function() {
        // var attr1 =  $('.burger-menu-default').attr('hidden');
        // var attr2 =  $('.burger-menu-close').attr('hidden');

        $('.burger-menu').each(function() {
            $(this).hasClass('hide') ? $(this).removeClass('hide') : $(this).addClass('hide');
        });
    });


    // CAROUSEL INIT
    if ($('.career__featured--slider').length !== 0) {
        $('.career__featured--slider').slick({
            infinite: true,
            slidesToScroll: 1,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        centerMode: true
                    }
                }
            ]
        });
    }

    if ($('.career__explore--slider').length !== 0) {
        $('.career__explore--slider').slick({
            infinite: true,
            slidesToScroll: 1,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        centerMode: true
                    }
                }
            ]
        }); 
    }   

    if ($('.career__events--slider').length !== 0) {
        $('.career__events--slider').slick({
            infinite: true,
            slidesToScroll: 1,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        centerMode: true
                    }
                }
            ]
        });
    }
    
    if ($('.career__video--slider').length !== 0) {
        $('.career__video--slider').slick({
            infinite: true,
            slidesToScroll: 1,
            variableWidth: true,
            centerMode: true
        });
    }
    
    // SLICK ARROW CONTROLS
    $('.career__controls .controls__arrow--right').click(function (e) {
        $(e.target).parent().parent().parent().find('.slick-next').click();
    });

    $('.career__controls .controls__arrow--left').click(function (e) {
        $(e.target).parent().parent().parent().find('.slick-prev').click();
    });



    // CAREER ACCORDION
    if ($('.faq-accordion').length !== 0) {
        
    const faqAccordionHeaders = document.querySelectorAll('.faq-accordion')

    faqAccordionHeaders.forEach(currentHeader => {
        currentHeader.addEventListener("click", event => {
            // to close any open accordions
            const openHeader = document.querySelector('.faq-accordion.active')

            if (openHeader && openHeader !== currentHeader) {
                openHeader.classList.toggle("active") //removes "active" class
            }

            currentHeader.classList.toggle("active")

            currentHeader.classList.contains("active")
                ? body.style.maxHeight = body.scrollHeight + "px"
                : body.style.maxHeight = 0;
        })
    })
    }
});