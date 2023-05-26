import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYER_ID = 'vimeo-player';
const CURRENT_TIME_KEY = 'videoplayer-current-time';


const player = new VimeoPlayer(PLAYER_ID);
const savedTime = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY));

if (savedTime) {
  player.setCurrentTime(savedTime);
}

player.on('timeupdate', throttle(function(event) {
  const currentTime = event.seconds;
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(currentTime));
}, 1000));