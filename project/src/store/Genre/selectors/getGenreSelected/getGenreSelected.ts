import {getGenre} from '../getGenre/getGenre';
import {createSelector} from '@reduxjs/toolkit';

export const getGenreSelected = createSelector(
  getGenre,
  (state) => state.selected
);
