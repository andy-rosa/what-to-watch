import {createSelector} from '@reduxjs/toolkit';
import {getFilm} from '../getFilm/getFilm';

export const getFilmFavoriteStatus = createSelector(
  getFilm,
  (film) => film?.isFavorite
);
