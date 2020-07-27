
$(document).ready(function () {

  $('#Container').mixItUp();
  new WOW().init();

  $('.collapse').collapse();


   // draw slider dots
  const $sliderItems = $('#carousel .flipster__item');
  const $sliderDots = $('#slider-dots');
  for (let i = 0; i < $sliderItems.length; i++) {
    const $sliderItem = $($sliderItems[i]);
    const dotClasses = $sliderItem.hasClass('flipster__item--current') ? 'active' : '';

    $sliderDots.append(
      `<li>
        <a class="item slider-dot ${dotClasses}"><span></span></a>
      </li>`
    );
  }

});


$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
var carousel = $("#carousel").flipster({
  style: 'carousel',
  spacing: -0.5,
  nav: true,
  buttons: true,
});




