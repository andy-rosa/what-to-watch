import { createSelector } from '@reduxjs/toolkit';
import {getGenreSelected} from '../../../Genre/selectors/getGenreSelected/getGenreSelected';
import {GenreFilter, GenreName} from '../../../../types/genre';
import {getFilmsList} from '../getFimsList/getFimsList';

export const getFilteredFilms = createSelector(
  getFilmsList,
  getGenreSelected,
  (films, selectedGenre) => films.filter((film) =>
    GenreFilter[selectedGenre] === GenreName.ALL_GENRES
    ||
    film.genre === GenreFilter[selectedGenre])
);
