$(document).ready(function(){
  $('.box-sizes-slider__slider').slick({
    slidesToShow: 4,
    dots: true,
    arrows: true
  });
});

$(document).ready(() => {
  $('.events-slider__slider').slick({
      dots: false,
      infinite: true,
      adaptiveWidth: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      mobileFirst: true,
      centerMode: false,
      prevArrow: '<button class="controls__arrow controls__arrow--left"><img src="./assets/images/arrow-tail-left.svg" alt=""></button>',
      nextArrow: '<button class="controls__arrow controls__arrow--right"><img src="./assets/images/arrow-tail-right.svg" alt=""></button>',
      appendArrows: $('.events-slider__details-controls').html("")
  });

  // $('.leftArrow').on('click', () => {
  //     $('.events-slider__slider').slickPrev();
  // });
  
  // $('.rightArrow').on('click', () => {
  //     $('.events-slider__slider').slickNext();
  // });
})

$(document).ready(() => {
  $('.box-sizes__slider-slides').slick({
      dots: false,
      infinite: true,
      adaptiveWidth: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      mobileFirst: true,
      centerMode: false,
      prevArrow: '<button class="controls__arrow controls__arrow--left"><img src="./assets/images/arrow-tail-left.svg" alt=""></button>',
      nextArrow: '<button class="controls__arrow controls__arrow--right"><img src="./assets/images/arrow-tail-right.svg" alt=""></button>',
      appendArrows: $('.box-sizes__controls').html("")
  });

  // $('.leftArrow').on('click', () => {
  //     $('.events-slider__slider').slickPrev();
  // });
  
  // $('.rightArrow').on('click', () => {
  //     $('.events-slider__slider').slickNext();
  // });
})

