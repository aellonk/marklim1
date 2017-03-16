// slick slider initializer //

$(document).ready(function(){
  $('.slider').slick({
  	mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,    
    dots: false,
    infinite: true,
    speed: 5,
    cssEase: 'ease',
    appendArrows: $('.button'),
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: "unslick"
  	}
  ]
  });
});