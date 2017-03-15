// slick slider initializer //

$(document).ready(function(){
  $('.slider').slick({
    mobileFirst: true,
	  slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,    
    dots: false,
    infinite: true,
    speed: 5,
    variableWidth: true,
    cssEase: 'ease',
    appendArrows: $('.button'),
    responsive: [
     {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
  	}
  ]
  });
});


/*

  $('#prev').click(function(){
    $(".slider").slick('slickNext');
  });

  $('#next').click(function(){
    $(".slider").slick('slickPrev');
  });
*/