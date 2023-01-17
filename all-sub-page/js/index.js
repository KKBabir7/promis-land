








document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('header').classList.add('fixed-top');
        document.getElementById('prfilere').classList.add('prfilere');
       
      

      } else {
        document.getElementById('header').classList.remove('fixed-top');
        document.getElementById('prfilere').classList.remove('prfilere');
       
       
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 



var modalEle = document.querySelector(".modalll");
var modalImage = document.querySelector(".modalImage");
Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item => {
   item.addEventListener("click", event => {
      modalEle.style.display = "block";
      modalImage.src = event.target.src;
   });
});


$(window).scroll(function(){
  if($(this).scrollTop()>100){
    $(".back-to-top").fadeIn();
  }else{
    $(".back-to-top").fadeOut();
  }
});
$(".back-to-top").click(function(){
  $("html, body").animate({scrollTop:0},2000)
})


$( '.header .navbar-nav li a' ).on( 'click', function () {
	$( '.header .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});





jQuery(document).ready(function($) {
  "use strict";
  $('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:0,
    nav:false,
    items:1,
    dots: true,
    merge:true,
    video:true,
    autoplayHoverPause:false,
    autoplay:false,
    lazyLoad:true,
    center:true,
     responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        600:{
            items:1,
            stagePadding: 100
        },
        1000:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 250
        },
        1400:{
            items:1,
            stagePadding: 300
        },
        1600:{
            items:1,
            stagePadding: 350
        },
        1800:{
            items:1,
            stagePadding: 400
        }
    },
    onTranslate: function () {
      $('.owl-item').find('video').each(function () {
          this.pause();
      });
  }
  })
});

function playSlider(){
  window.owl.trigger('play.owl.autoplay')
}

// Pause slider when video play
function pauseSlider(){
  window.owl.trigger('stop.owl.autoplay')
}














$('.video').parent().click(function () {
  if($(this).children(".video").get(0).paused){        $(this).children(".video").get(0).play();   $(this).children(".playpause").fadeOut();
    }else{       $(this).children(".video").get(0).pause();
  $(this).children(".playpause").fadeIn();
    }
});


