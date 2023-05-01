import {transformDurationVideo} from '../../../helpers/transform-duration-video';

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
        <progress className={'player__progress'} value={`${progress}`} max="100"></progress>
        <div className={'player__toggler'} style={{left: `${progress}%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{durationTime}</div>
    </div>
  );
};

export default TimePlayer;
