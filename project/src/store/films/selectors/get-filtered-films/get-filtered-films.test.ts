import { getFilteredFilms, } from './get-filtered-films';
import {getFilmsListWithGenreMock} from '../../mock-test/generate-films-list-mock';
import {DeepPartial} from '@reduxjs/toolkit';
import {RootState} from '../../../../types/root-state';
import { GenreName } from '../../../../types/genre';

const HORROR = 1;

describe('getFilteredFilms', () => {
  test('should return all films if the selected genre is "All genres"', () => {
    const state: DeepPartial<RootState> = {
      films: {
        films: getFilmsListWithGenreMock()},
      genre: {
        selected: GenreName.ALL_GENRES,
      }
    };

    const result = getFilteredFilms(state as RootState);

    expect(result).toEqual(state.films?.films);
    expect(result).toHaveLength(3);
  });

  test('should return only films that match the selected genre', () => {
    const state: DeepPartial<RootState> = {
      films: {
        films: getFilmsListWithGenreMock()},
      genre: {
        selected: GenreName.HORROR,
      }
    };

    const result = getFilteredFilms(state as RootState);
    expect(result).toEqual([state.films?.films?.[HORROR]]);
  });

  test('should return an empty array if there are no films that match the selected genre', () => {
    const state: DeepPartial<RootState> = {
      films: {
        films: getFilmsListWithGenreMock()},
      genre: {
        selected: GenreName.DRAMAS,
      }
    };

    const result = getFilteredFilms(state as RootState);
    expect(result).toEqual([]);
  });
});
