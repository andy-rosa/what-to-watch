import React from 'react';
import {Films} from '../../../types/films';

const FilmCardPoster = ({posterImage, name}: Pick<Films, 'posterImage' | 'name'>) => (
  <div className="film-card__poster film-card__poster--big">
    <img src={`${posterImage}`} alt={name} width="218"
      height="327"
    />
  </div>
);

export default FilmCardPoster;
