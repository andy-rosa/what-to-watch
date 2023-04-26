import {getGenre} from '../get-genre/get-genre';
import {createSelector} from '@reduxjs/toolkit';

export const getGenreSelected = createSelector(
  getGenre,
  (state) => state.selected
);
