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
