
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
    nav: true,
    buttons: false,
    keyboard: false
  });

   // draw slider dots
  const $sliderItems = $('#carousel .flipster__item');
  const $sliderDots = $('#slider-dots');
  for (let i = 0; i < $sliderItems.length; i++) {
    const $sliderItem = $($sliderItems[i]);
    const dotClasses = $sliderItem.hasClass('flipster__item--current') ? 'active' : '';

    $sliderDots.append(
      `<li>
        <a class="item slider-dot ${dotClasses}" data-index=${i}><span></span></a>
      </li>`
    );
  }

  // add dots click listeners
  $sliderDots.on('click', '.slider-dot', function(e) {
    // remove dots
    $('.slider-dot').removeClass('active');
    
    const $dot = $(e.target);
    $dot.addClass('active');
    const index = parseInt($dot.data('index'));
    const $flipsterNavItem = $(`.flipster__nav__link:eq(${index})`);
    console.log($flipsterNavItem);
    $flipsterNavItem.click();
  });

  // adding click listener to the filpster items to sync with dots
  $('li.flipster__item').on('click', function() {
    const $item = $(this);
    $('.slider-dot').removeClass('active');
    $(`.slider-dot[data-index=${$item.index()}]`).addClass('active');
  });

});


$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});