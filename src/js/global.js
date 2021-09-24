//burger
$('#burger').on('click', function(){
    $('#burgerlink').toggleClass('active')
    $('.nav').toggleClass('active')
});
//dropdown
$('.nav__elem-dropbox').on('click', function(){
    $(this).toggleClass('active')
    $($(this).data('target')).stop(true, false).slideToggle() 
});

//inst-slider 
$('.slider-inst').slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true
        }
      }
    ]
});
