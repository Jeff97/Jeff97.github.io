/* Reflected light follows the pointer without moving text or tilting media. */
(function () {
  'use strict';
  var preference = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  var selector = '.masthead, .author-profile, .academic-tags > span, .academic-button, .talk-type, .research-video__play, .author__urls-wrapper > button';
  var active = null;
  var frame = 0;
  var x = 0;
  var y = 0;

  function reset() {
    if (frame) window.cancelAnimationFrame(frame);
    frame = 0;
    if (!active) return;
    ['--glass-x', '--glass-y', '--glass-angle'].forEach(function (name) {
      active.style.removeProperty(name);
    });
    active = null;
  }

  document.addEventListener('pointermove', function (event) {
    if (!preference.matches || event.pointerType === 'touch') return;
    var surface = event.target.closest(selector);
    if (surface !== active) {
      reset();
      active = surface;
    }
    if (!active) return;
    x = event.clientX;
    y = event.clientY;
    if (frame) return;
    frame = window.requestAnimationFrame(function () {
      frame = 0;
      if (!active) return;
      var rect = active.getBoundingClientRect();
      active.style.setProperty('--glass-x', (x - rect.left) + 'px');
      active.style.setProperty('--glass-y', (y - rect.top) + 'px');
      active.style.setProperty('--glass-angle', (120 + 90 * (x - rect.left) / Math.max(1, rect.width)) + 'deg');
    });
  }, { passive: true });

  document.addEventListener('pointerleave', reset);
  window.addEventListener('blur', reset);
  if (preference.addEventListener) preference.addEventListener('change', reset);
}());
