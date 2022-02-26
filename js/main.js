var owl = $('.owl-carousel');
owl.owlCarousel({
 // animateOut: 'slideOutDown',
 // animateIn: 'flipInX',
 loop: true,
 nav: true,
 margin: 1,
 smartSpeed: 250,
 responsive: {
  0: {
   items: 2
  },
  600: {
   items: 5
  },
  960: {
   items: 5
  },
  1200: {
   items: 5
  }
 }
});






