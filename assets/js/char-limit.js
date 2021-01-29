$(document).ready(function() {
    if ($('.gift-wrapping__slider-content')) {
        var limit = $('.gift-wrapping__slider-content').children("p").text().substring(0,119)
        $('.gift-wrapping__slider-content').children("p").text(limit)
    }

    if ($('.box-sizes__slider-content')) {
        var limit = $('.box-sizes__slider-content').children("p").text().substring(0,119)
        $('.box-sizes__slider-content').children("p").text(limit)
    }
})