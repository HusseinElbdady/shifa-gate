$(".navbar .collapse .to-activate").on("click", function () { // to toggle active class between navbar anchors 
  $(".navbar .collapse ul .active").removeClass("active");
  $(this).addClass("active");
});


// search from toggle 
$(".search-icon-container").on('click', function() {
  $('.search-form form').fadeToggle();
})

// Navbar scroll auto hide 7 show

if(document.querySelector(".nav-index")) {
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 120) {
      document.querySelector(".nav-index").style.top = '0';
    } else {
      document.querySelector(".nav-index").style.top = '-160px';
    }
  }};
// to go to diagram bg
let diagramBG = $(".diagram-bg-container").position();
$('.Features-btn').click(function () {
  $('html, body').animate({
    scrollTop: diagramBG.top -55
  }, 500);
});

// to go to map 
let map = $(".map").position();
$('.map-btn').click(function () {
  $('html, body').animate({
    scrollTop: map.top -40
  }, 500);
});

$('.contactus-btn').click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, 1000);
});

// owl carousel
$('.slider .owl-carousel').owlCarousel({
  rtl: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

// phase slider 
$('.phase-slider .owl-carousel').owlCarousel({
  rtl: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
});


const viewer = new Viewer(document.getElementById('image'), {
  inline: false,
  viewed() {
    viewer.zoomTo(0.3);
  },
});

