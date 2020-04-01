$(document).ready(function(){
  //imposto variabile di stato
  var stateItem = "";
  //salvo in una varibile la selezione dei tag a del hamburger menu
  var listItem = $('div.hamburger-menu a');

  listItem.click(
    function () {
      //seleziono il div fratello del tag a
      $(this).siblings('div').toggle();

    })

});
