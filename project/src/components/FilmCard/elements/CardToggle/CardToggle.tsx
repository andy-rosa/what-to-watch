import React, {useEffect, useRef, useState} from 'react';
import CardPlayer from '../CardPlayer/CardPlayer';
import CardPoster from '../CardPoster/CardPoster';

const STANDARD_DELAY = 1000;

type CardToggleProps = {
  isActive: boolean;
  videoLink: string;
  posterImage: string;
  name: string;
}

const CardToggle = ({posterImage, name, videoLink, isActive}: CardToggleProps): JSX.Element => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setTimeout(() => {
        setIsPlaying(true);
      }, STANDARD_DELAY);
      return () => {timerRef.current && clearTimeout(timerRef.current);};
    }

    setIsPlaying(false);
  }, [isActive]);

  return isPlaying
    ? < CardPlayer isPlaying={isPlaying} videoLink={videoLink} />
    : < CardPoster name={name} posterImage={posterImage} />;
};

export default CardToggle;
