import {createSelector} from '@reduxjs/toolkit';
import { getFilms } from '../getFilms/getFilms';

export const getPromoFilm = createSelector(
  getFilms,
  (film) => film.promoFilm
);
