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
    
    $('.career__video--slider').slick({
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true
    });
    
    // SLICK ARROW CONTROLS
    $('.career__controls .controls__arrow--right').click(function (e) {
        $(e.target).parent().parent().parent().find('.slick-next').click();
    });

    $('.career__controls .controls__arrow--left').click(function (e) {
        $(e.target).parent().parent().parent().find('.slick-prev').click();
    });



    // CAREER ACCORDION
    $('.faq-accordion__header').click(function(e) {
        console.log(e.target)
        console.log($(e.target).closest('.faq-accordion').hasClass('active'))
        $(e.target).closest('.faq-accordion').hasClass('active') ? $(e.target).closest('.faq-accordion').removeClass('active') : $(e.target).closest('.faq-accordion').addClass('active');
    });
});