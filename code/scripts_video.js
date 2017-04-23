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


var $frame = $('vimeo');

// saves the current iframe source
var vidsrc = $frame.attr('src');

// sets the source to nothing, stopping the video
$frame.attr('src',''); 

// sets it back to the correct link so that it reloads immediately on the next window open
$frame.attr('src', vidsrc);