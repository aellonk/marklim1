// slick slider initializer //

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,    
    dots: false,
    infinite: true,
    speed: 5,
    cssEase: 'ease'
  });
});