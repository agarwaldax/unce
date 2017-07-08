$(document).ready(function(){
  $(".togglemenubutton").click(function(){
    $("nav").toggleClass("toggle");
    $(".dimpage").fadeToggle(800);
  });
  
  $(".dimpage").click(function(){
    $("nav").toggleClass("toggle");
    $(".dimpage").fadeToggle(800);
  });
  
  var onPage = document.getElementsByTagName("nav")[0].dataset.onpage;
  
  $(window).on("scroll", function(){
    var sec = $("section.mobNavBar").offset().top;
    if (onPage.indexOf("-sub") !== -1) {
      if(sec > 50) {
        $("section.mobNavBar").css("background", "#fff");
        $("section.mobNavBar").css("box-shadow", "0px 0px 6px 4px rgba(0, 0, 0, 0.35)");
        $("nav a").addClass("color");
        $("section.mobNavBar .logo").attr("src", "../res/logo-color.svg");
        $("section.mobNavBar .menu").attr("src", "../res/menu-color.svg");
        
      }
      else {
        $("section.mobNavBar").css("background", "none");
        $("section.mobNavBar").css("box-shadow", "none");
        $("nav a").removeClass("color");
        $("section.mobNavBar .logo").attr("src", "../res/logo-white.svg");
        $("section.mobNavBar .menu").attr("src", "../res/menu-white.svg");
      }
    } else {
      if(sec > 50) {
        $("section.mobNavBar").css("background", "#fff");
        $("section.mobNavBar").css("box-shadow", "0px 0px 6px 4px rgba(0, 0, 0, 0.35)");
        $("nav a").addClass("color");
        $("section.mobNavBar .logo").attr("src", "res/logo-color.svg");
        $("section.mobNavBar .menu").attr("src", "res/menu-color.svg");
      }
      else {
        $("section.mobNavBar").css("background", "none");
        $("section.mobNavBar").css("box-shadow", "none");
        $("nav a").removeClass("color");
        $("section.mobNavBar .logo").attr("src", "res/logo-white.svg");
        $("section.mobNavBar .menu").attr("src", "res/menu-white.svg");
      }
    }
  });
});