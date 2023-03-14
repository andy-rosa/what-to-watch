import React from 'react';
import CardPlayer from './CardPlayer';
import CardPoster from './CardPoster';

type CardToggleProps = {
  isActive: null | number;
  videoLink: string;
  posterImage: string;
  name: string;
}

const CardToggle = ({posterImage, name, videoLink, isActive}: CardToggleProps) => (
  isActive
    ? < CardPlayer videoLink={videoLink} posterImage={posterImage}/>
    : < CardPoster name={name} posterImage={posterImage} />
);

export default CardToggle;
