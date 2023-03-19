import React, {useEffect, useRef} from 'react';
import {FilmCardProps} from '../FilmCard';

const STANDARD_DELAY = 1000;

const CardPlayer = ({videoLink, posterImage}: Pick<FilmCardProps, 'videoLink' | 'posterImage'>) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef();

  useEffect(() => {
    // @ts-ignore
    timerRef.current = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.volume = 0;
        videoRef.current.play();
      }
    }, STANDARD_DELAY);
    return () => clearTimeout(timerRef.current);
  },[]);

  return (
    <div className="small-film-card__image">
      <video
        poster={posterImage}
        ref={videoRef}
        width="280"
        height="175"
      >
        <source src={videoLink}/>
      </video>
    </div>
  );
};

export default CardPlayer;
