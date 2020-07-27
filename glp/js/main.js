
$(document).ready(function () {

  // Mixit up
  $('#Container').mixItUp();
  new WOW().init();

  // Collapse
  $('.collapse').collapse();

  // Init flipster carousel
  const carousel = $("#carousel").flipster({
    style: 'carousel',
    spacing: -0.5,
    nav: 'after',
    buttons: false,
    keyboard: true,
    autoplay: true,
    scrollwheel: true
  });

  $('.flipster__nav__link').html('');

});


$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});