jQuery(document).ready(function($){
      $('.testimonial-slider').slick({
      lazyLoad: 'ondemand'
        infinite: true,
         dots: true,
       slidesToShow: 3,
        slidesToScroll: 3
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 ]
      });
      });
