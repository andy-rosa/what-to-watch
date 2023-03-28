import {createSelector} from '@reduxjs/toolkit';
import {getGenre} from '../getGenre/getGenre';

export const getGenreActiveGenre = createSelector(
  getGenre,
  (genre) => genre.activeGenre
);
