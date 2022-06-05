$(document).ready(function () {
  $('.slide-show').slick({
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true
        }
      }
    ]
  });

  $('#product-one').click(function(e){
    e.preventDefault();
    $('.slide-show').slick('slickGoTo', 1)
  })

  $('#product-two').click(function(e){
    e.preventDefault();
    $('.slide-show').slick('slickGoTo', 2)
  })

  $('#product-three').click(function(e){
    e.preventDefault();
    $('.slide-show').slick('slickGoTo', 3)
  })

  $('#product-foure').click(function(e){
    e.preventDefault();
    $('.slide-show').slick('slickGoTo', 4)
  })
  $('#product-five').click(function(e){
    e.preventDefault();
    $('.slide-show').slick('slickGoTo', 1)
  })
  $('#product-six').click(function(e){
    e.preventDefault();
    $('.slide-show').slick('slickGoTo', 6)
  })

});