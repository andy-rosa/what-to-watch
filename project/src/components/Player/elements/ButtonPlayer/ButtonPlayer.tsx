import React from 'react';

interface ButtonPlayerProps {
  handlePlayControlClick: () => void;
  handleFullscreenClick: () => void;
  name: string;
  isPlaying: boolean;
}

const ButtonPlayer = ({
  handlePlayControlClick,
  handleFullscreenClick,
  name,
  isPlaying
}: ButtonPlayerProps) => (
  <div className="player__controls-row">
    <button type="button" className="player__play" onClick={handlePlayControlClick}>
      {isPlaying
        ? (
          <>
            <svg viewBox="0 0 14 21" width="14" height="21">
              <use xlinkHref="#pause"></use>
            </svg>
            <span>Pause</span>
          </>
        )
        : (
          <>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </>
        )}
    </button>
    <div className="player__name">{name}</div>

    <button type="button" className="player__full-screen" onClick={handleFullscreenClick}>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  </div>
);

export default ButtonPlayer;
