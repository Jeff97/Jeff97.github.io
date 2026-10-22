/* Keep native playback controls, with a clean, keyboard-accessible poster first. */
(function () {
  'use strict';

  document.querySelectorAll('.research-video').forEach(function (figure) {
    var video = figure.querySelector('video');
    var button = figure.querySelector('.research-video__play');
    var status = figure.querySelector('.research-video__status');
    if (!video || !button) return;

    video.controls = false;
    button.hidden = false;

    video.addEventListener('loadedmetadata', function () {
      // The browser now applies the MP4 sample aspect ratio itself.
      video.classList.add('has-metadata');
    });

    function showError() {
      video.controls = true;
      button.hidden = false;
      status.hidden = false;
    }

    video.addEventListener('error', showError);
    var source = video.querySelector('source');
    if (source) source.addEventListener('error', showError);

    button.addEventListener('click', function () {
      button.hidden = true;
      status.hidden = true;
      video.controls = true;
      var playback = video.play();
      if (playback && playback.catch) playback.catch(showError);
      video.focus();
    });

    video.addEventListener('play', function () {
      button.hidden = true;
      status.hidden = true;
    });
  });
}());
