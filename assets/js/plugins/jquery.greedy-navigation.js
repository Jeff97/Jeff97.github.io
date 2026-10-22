/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

function updateNav() {
  // Re-measure at the current font size instead of reusing widths from a
  // different breakpoint. Appending hidden links preserves their order.
  $vlinks.append($hlinks.children());
  $btn.addClass('hidden');
  var availableSpace = $nav.width();

  while ($vlinks.width() > availableSpace && $vlinks.children().length > 1) {
    $vlinks.children('*:not(.masthead__menu-item--lg)').last().prependTo($hlinks);
    $btn.removeClass('hidden');
    availableSpace = $nav.width() - $btn.outerWidth(true) - 12;
  }

  var hiddenCount = $hlinks.children().length;
  $btn.attr('count', hiddenCount);
  if (!hiddenCount) {
    $hlinks.addClass('hidden');
    $btn.attr('aria-expanded', 'false').removeClass('close');
  }
}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close').attr('aria-expanded', String(!$hlinks.hasClass('hidden')));
});

updateNav();
$(document).on('keydown', function(event) {
  if (event.key === 'Escape' && !$hlinks.hasClass('hidden')) {
    event.preventDefault();
    $hlinks.addClass('hidden');
    $btn.removeClass('close').attr('aria-expanded', 'false').trigger('focus');
  }
});
