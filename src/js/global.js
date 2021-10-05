//burger
$('#burger').on('click', function(){
    $('#burgerlink').toggleClass('active')
    $('.nav').toggleClass('active')
});
//dropdown
$('.tringle-drop').on('click', function(){
    $('.tringle-drop').not(this).removeClass('active')
    $(this).toggleClass('active')
    $('.nav__elem-drop').slideUp() 
    $($(this).data('target')).stop(true, false).slideToggle() 
});

// $('.nav__elem-dropbox').hover(function(){
//     $(this).toggleClass('active')
//     $('.nav__elem-drop').slideUp() 
//     $($(this).data('target')).stop(true, false).slideToggle() 
// });

$('.filters__title').on('click', function(){
  $(this).toggleClass('active') 
  $($(this).data('target')).stop(true, false).slideToggle()  
});

$('.question__droptitle').on('click', function(){
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


//intro-slider 
$('.slider-intro').slick({
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
});

//pop-prod-slider

$('.slider-pop-prod').slick({
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  dots: true,
  responsive: [
    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
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