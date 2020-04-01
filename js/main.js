$(document).ready(function(){
  //imposto variabile di stato
  var stateItem = "";
  //salvo in una varibile la selezione dei tag a del hamburger menu
  var listItem = $('div.nav-dx a');
  var hamburgerMenu = $('.nav-dx');

  listItem.click(
    function () {
      $(this).siblings('div').toggle();
  })

  $('.fa-bars').click(
    function(){
      $(this).hide();
      $('.hamburger-menu').show();
      $('.fa-times').show();
      $('.nav-sx h1').addClass('fadeOut');
    }
  )

  $('.fa-times').click(
    function(){
      $(this).hide();
      $('.hamburger-menu').hide();
      $('.fa-bars').show();
      $('.nav-sx h1').removeClass('fadeOut');
      $('.nav-sx h1').addClass('fadeIn');
    }
  )



});
