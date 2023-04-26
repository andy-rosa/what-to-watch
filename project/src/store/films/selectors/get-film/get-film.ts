import {createSelector} from '@reduxjs/toolkit';
import { getFilms } from '../get-films/get-films';

export const getFilm = createSelector(
  getFilms,
  (films) => films.film
);
