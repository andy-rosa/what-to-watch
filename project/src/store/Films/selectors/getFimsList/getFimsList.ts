import {createSelector} from '@reduxjs/toolkit';
import {getFilms} from '../getFilms/getFilms';

export const getFilmsList = createSelector(
  getFilms,
  (films) => films.films
);
