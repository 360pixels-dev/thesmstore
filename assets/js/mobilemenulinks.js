$(document).ready(() => {
    $('#findevents__mobile-menu-links').slick({
        dots: true,
        adaptiveWidth: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        mobileFirst: true,
        centerMode: false,
        focusOnSelect: true,
    })
})