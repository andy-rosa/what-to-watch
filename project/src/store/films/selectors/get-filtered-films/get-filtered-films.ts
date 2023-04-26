import { createSelector } from '@reduxjs/toolkit';
import {getGenreSelected} from '../../../genre/selectors/get-genre-selected/get-genre-selected';
import {GenreFilter, GenreName} from '../../../../types/genre';
import {getFilmsList} from '../get-fims-list/get-fims-list';

export const getFilteredFilms = createSelector(
  getFilmsList,
  getGenreSelected,
  (films, selectedGenre) => films.filter((film) =>
    GenreFilter[selectedGenre] === GenreName.ALL_GENRES
    ||
    film.genre === GenreFilter[selectedGenre])
);
