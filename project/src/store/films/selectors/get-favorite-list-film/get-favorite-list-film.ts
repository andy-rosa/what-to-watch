import {createSelector} from '@reduxjs/toolkit';
import {getFilms} from '../get-films/get-films';

export const getFavoriteListFilm = createSelector(
  getFilms,
  (films) => films?.favoriteList
);
