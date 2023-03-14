import React from 'react';
import {FilmCardProps} from '../FilmCard';

const CardPoster = ({posterImage, name}: Omit<FilmCardProps, 'id' | 'videoLink'>) => (
  <>
    <div className="small-film-card__image">
      <img
        alt={name}
        src={posterImage}
        width="280"
        height="175"
      />
    </div>
    <h3 className="small-film-card__title">
      <span className={'small-film-card__link'}>
        {name}
      </span>
    </h3>
  </>
);

export default CardPoster;
