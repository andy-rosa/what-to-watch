import React from 'react';
import {transformDurationVideo} from '../../../../helpers/transformDurationVideo';
import cls from './TimePlayer.module.css';

interface TimePlayerProps {
  duration: number;
  currentTime: number;
}

const TimePlayer = ({duration, currentTime}: TimePlayerProps) => {
  const durationTime = transformDurationVideo(duration - currentTime);
  const progress = (currentTime / duration) * 100;

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className={`player__progress ${cls.bar}`} value={progress} max="100"></progress>
        <div className={`player__toggler ${cls.toggler}`} style={{left: `${progress}%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{durationTime}</div>
    </div>
  );
};

export default TimePlayer;
