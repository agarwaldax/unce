$(document).ready(function(){
  $(".togglemenubutton, .dimpage").click(function(){
    $("nav").toggleClass("toggle");
    $(".dimpage").fadeToggle(500);
  });
  
  var onPage = document.getElementsByTagName("nav")[0].dataset.onpage;
  var parent = onPage.indexOf("-sub") < 0 ? "" : "../";
  var once = true;
  $(window).on("scroll", function(){
    var location = $("section.mobNavBar").offset().top - $("section.content").offset().top;
    if (location > 50) {
      $("section.mobNavBar").css("background", "#fff");
      $("section.mobNavBar").css("box-shadow", "0px 0px 6px 4px rgba(0, 0, 0, 0.35)");
      $("nav a").addClass("color");
      $("section.mobNavBar .logo").attr("src", parent + "res/logo-color.svg");
      $("section.mobNavBar .menu").attr("src", parent + "res/menu-color.svg");
    } else {
      $("section.mobNavBar").css("background", "none");
      $("section.mobNavBar").css("box-shadow", "none");
      $("nav a").removeClass("color");
      $("section.mobNavBar .logo").attr("src", parent + "res/logo-white.svg");
      $("section.mobNavBar .menu").attr("src", parent + "res/menu-white.svg");
    }
    var courseDist;
    while(courseDist === undefined)
      courseDist = $("#home .courses").offset().top - $("section.mobNavBar").offset().top;
    if (courseDist < 550 && once) {
      once = false;
      $('.count').each(function () {
      var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter));
          }
        });
      });
    };
  });

  $("section.content").css("min-height", $(window).height() - $("footer").height() - 65);
  $(window).resize(function() {
    $("section.content").css("min-height", $(window).height() - $("footer").height() - 65);
  });
});