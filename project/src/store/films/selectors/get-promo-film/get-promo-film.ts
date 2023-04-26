import {createSelector} from '@reduxjs/toolkit';
import { getFilms } from '../get-films/get-films';

export const getPromoFilm = createSelector(
  getFilms,
  (film) => film.promoFilm
);
