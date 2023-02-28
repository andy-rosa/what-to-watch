import React from 'react';
import ButtonPlayer from './elements/ButtonPlayer';
import TimePlayer from './elements/TimePlayer';

const Player = () => (
  <div className="player">
    <video src="#" className="player__video" poster="img/player-poster.jpg"></video>
    <button type="button" className="player__exit">Exit</button>

    <div className="player__controls">
      <TimePlayer />
      <ButtonPlayer />
    </div>
  </div>
);

export default Player;
