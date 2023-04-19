import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayetEl = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayetEl, {
  id: 19231868,
  width: 640,
});

player.on(
  'timeupdate',
  throttle(function (e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }),
  1000
);
player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
