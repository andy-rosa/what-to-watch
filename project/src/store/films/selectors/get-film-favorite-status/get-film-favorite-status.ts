import {createSelector} from '@reduxjs/toolkit';
import {getFilm} from '../get-film/get-film';

export const getFilmFavoriteStatus = createSelector(
  getFilm,
  (film) => film?.isFavorite
);
