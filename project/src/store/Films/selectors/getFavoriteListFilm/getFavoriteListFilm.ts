import {createSelector} from '@reduxjs/toolkit';
import {getFilms} from '../getFilms/getFilms';

export const getFavoriteListFilm = createSelector(
  getFilms,
  (films) => films?.favoriteList
);
