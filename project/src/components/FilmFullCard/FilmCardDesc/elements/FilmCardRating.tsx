import React from 'react';
import {Films} from '../../../../mocks/films';

export type FilmCardDescProps = 'rating' | 'scoresCount'

const FilmCardRating = ({rating, scoresCount}: Pick<Films, FilmCardDescProps>) => (
  <div className="film-rating">
    <div className="film-rating__score">{rating}</div>
    <p className="film-rating__meta">
      <span className="film-rating__level">Very good</span>
      <span className="film-rating__count">{scoresCount} ratings</span>
    </p>
  </div>
);

export default FilmCardRating;
