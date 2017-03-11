// slick slider initializer //

$(document).ready(function(){
  $('.slideshow').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,    
    dots: false,
    speed: 100,
    fade: true,
    infinite: true
  });
});

var prevSlideInterval = null,
    nextSlideInterval = null;

function prevSlideAnimation() { $('.slideshow').slickPrev(); };
function nextSlideAnimation() { $('.slideshow').slickNext(); };

$('.slick-prev').on('mouseenter', function() {
  prevSlideInterval = window.setInterval(function(){ prevSlideAnimation() }, 200);
});

$('.slick-prev').on('mouseleave', function() {
  window.clearInterval(prevSlideInterval);
});

$('.slick-next').on('mouseenter', function(){
  nextSlideInterval = window.setInterval(function(){ nextSlideAnimation() }, 200);
});

$('.slick-next').on('mouseleave', function() {
  window.clearInterval(nextSlideInterval);
});