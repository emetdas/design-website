$(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows : false,
        autoplay : true,
        autoplaySpeed : 500,
    });
    
    $('.slider-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : true,
        autoplay : true,
        fade : true,
        prevArrow : ' <i class="fa fa-arrow-left"></i>',
        nextArrow : ' <i class="fa fa-arrow-right"></i>',
        // dots : true
    });

    $('.port-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows : false,
      autoplay : true,
      autoplaySpeed : 5000,
  });
  // service
    $('.service-slider').slick({
      vertical:true,
      autoplay : true,
      autoplaySpeed : 5000,
      arrows : true,
      prevArrow : ' <i class="fas fa-angle-up"></i>',
      nextArrow : ' <i class="fas fa-angle-down"></i>',
  });
  // client-end
  //mixitup
  $(".file").mixItUp();
  $('.filter').on('click', function () {
    $('.filter').removeClass('act');
    $(this).addClass('act');
})
// client-slider
$(".owl-carousel").owlCarousel({
  loop: true,
  dots: true,
  margin: 15,
  slidesToShow: 3,
  slidesToScroll: 3,
  slideSpeed: 1000,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  resonsiveClass: true,
  responsiveRefreshRate: true,
  responsive: {
      0 : {
          items: 1
      },
      768 : {
          items: 2
      },
      1000 : {
          items: 2
      },
      1200 : {
          items: 3
      },
      1920 : {
          items: 3
      }
  }
});  
    //counter js 
    $('.counter').counterUp({
      delay: 10,
      time: 5000
  });
  //wow js 
  new WOW().init();

      // Progress bars
      $(document).ready(function() {
        $('.progress .progress-bar').css("width",
                  function() {
                      return $(this).attr("aria-valuenow") + "%";
                  }
          )
      });

});

// stiky nav waypoint
$(document).ready(function () {
    $(".header").waypoint(function (direction) {
      if (direction == "down") {
        $("#nav").addClass("stky");
      } else {
        $("#nav").removeClass("stky");
      }
    //   offset: '20px';
    });
  });
// nav-active
$('#nav').onePageNav({
   currentClass: 'active',
   changeHash: false,
   scrollSpeed: 750,
   scrollThreshold: 0.5,
   filter: '',
 easing: 'swing',
});
// light box
$('.venobox').venobox({
  arrows: true,
  spinner: 'three-bounce',
  titleattr: 'data-title',
});

// BOTTOM SCROLL TOP BUTTON
$(document).ready(function () {
    var scrollTop = $(".scrollTop");
    $(window).scroll(function () {
      var topPos = $(this).scrollTop();
      if (topPos > 100) {
        $(scrollTop).css("opacity", "1");
      } else {
        $(scrollTop).css("opacity", "0");
      }
    });
    $(scrollTop).click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
}); });
//  scroll-top END
function mobile(){
  var menu =document.getElementById("mobile")
  if(menu.style.display == "block"){
    menu.style.display ="none";
  }
  else{
    menu.style.display ="block";
    menu.style.backgroundColor ="#ddd";
  }
};
