import {createSelector} from '@reduxjs/toolkit';
import {getFilms} from '../get-films/get-films';

export const getFilmsList = createSelector(
  getFilms,
  (films) => films.films
);
