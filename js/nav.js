$(document).ready(function(){
  $(".togglemenubutton").click(function(){
    $("nav").toggleClass("toggle");
    $(".dimpage").fadeToggle(800);
  })
  
  $(".dimpage").click(function(){
    $("nav").toggleClass("toggle");
    $(".dimpage").fadeToggle(800);
  })
});