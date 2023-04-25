import {createSelector} from '@reduxjs/toolkit';
import { getFilms } from '../getFilms/getFilms';

export const getFilm = createSelector(
  getFilms,
  (films) => films.film
);
