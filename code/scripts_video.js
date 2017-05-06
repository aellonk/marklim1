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
    
  });
});



// On before slide change
    var iframe = document.querySelector('iframe#vimeo1');
    var player1 = new Vimeo.Player(iframe);
$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide)
{
  if ( currentSlide == 0 ) 
  {
    player1.pause();
  }
});

    var iframe = document.querySelector('iframe#vimeo2');
    var player2 = new Vimeo.Player(iframe);
$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide)
{
  if ( currentSlide == 1 ) 
  {
    player2.pause();
  }
});

    var iframe = document.querySelector('iframe#vimeo3');
    var player3 = new Vimeo.Player(iframe);
$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide)
{
  if ( currentSlide == 2 ) 
  {
    player3.pause();
  }
});

    var iframe = document.querySelector('iframe#vimeo4');
    var player4 = new Vimeo.Player(iframe);
$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide)
{
  if ( currentSlide == 3 ) 
  {
    player4.pause();
  }
});

    var iframe = document.querySelector('iframe#vimeo5');
    var player5 = new Vimeo.Player(iframe);
$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide)
{
  if ( currentSlide == 4 ) 
  {
    player5.pause();
  }
});


    var iframe = document.querySelector('iframe#vimeo6');
    var player6 = new Vimeo.Player(iframe);
$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide)
{
  if ( currentSlide == 5) 
  {
    player6.pause();
  }
});

