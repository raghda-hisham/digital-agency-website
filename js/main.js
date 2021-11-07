
$(document).ready(function() {
    $('.menu').click(function() {
        $(".sidebar").toggle();
    });
  });
  function myFunction(x) {
    x.classList.toggle("change");
  };

  $(window).scroll(function(){
    if($(window).scrollTop()>200){
      $('.navbar').css({"background-color":"white","transition":"all 1s","box-shadow":" 1px 6px 14px 16px rgba(39, 38, 38, 0.2)"});
    // $('nav').css({"background-color":"white","transition":"all 1s"," box-shadow":" 1px 6px 14px 16px rgba(39, 38, 38, 0.2)"});
    $('.navbar-content li a').css({"color":"black"});
    $('path').css({"fill":"black"});
    }
    else{
      $('.navbar').css({"background-color":"transparent","box-shadow":"none"});
    //  $('nav').css({"background-color":"transparent"});
     $('.navbar-content li a').css({"color":"white"});
     $('path').css({"fill":"white"});


    }
})

$(".owl-carousel").owlCarousel({
  autoplay:true,
  autoplayhoverpause:true,
  autoplaytimeout:10,
  dots:true,
  loop:true,
  margin:900,
  marginLeft:-300,
  // smartSpeed:400,
  center:true,
  // navText:['<div class="owl-dots"><div class="owl-dot"></div></div>','<div class="owl-dots"><div class="owl-dot"></div></div>'],
  responsive:{
    0:{
      items:1,
      marginLeft:0,
      margin:3,
    },
    900:{
      items:1,
      marginLeft:0,
      margin:3,
    },
    1200:{
      items:3,

    }
  }
});
