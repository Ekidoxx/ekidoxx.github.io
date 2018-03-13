// Load settings for particles, depending on whether the device is anything else than desktop or not
if (WURFL.form_factor !== "Desktop") {

  particlesJS.load("particles", "assets/other/particles - mobile settings.json", function() {
    console.info("Particles: Loaded mobile settings");
  });

} else {

  particlesJS.load("particles", "assets/other/particles - desktop settings.json", function() {
    console.info("Particles: Loaded desktop settings");
  });

};



// Initialize MDB's animations and tooltip
$(function () {

  wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true
  }); wow.init();

  $('[data-toggle="tooltip"]').tooltip();

});



// Set proper data-off and create smooth scrolling effect
$(function () {

  var fontSize = parseFloat($("body").css("font-size"));
  var navHeight = $("nav").outerHeight(true);

  $("body").attr("data-offset", navHeight + 1);

  $("a[href^='#']").click(function(e) {

    e.preventDefault();

    if ($(this).attr("href") == "#main") {
      var position = $($(this).attr("href")).offset().top;
    } else {
      var position = $($(this).attr("href")).offset().top - navHeight - fontSize;
    };


    $("body, html").animate({
      scrollTop: position
    }, 500, "swing");

  });

});
