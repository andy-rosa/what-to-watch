import { getFilteredFilms, } from './getFilteredFilms';
import {getFilmsListWithGenreMock} from '../../mock-test/generateFilmsListMock';
import {DeepPartial} from '@reduxjs/toolkit';
import {RootState} from '../../../../types/rootState';
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

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = getFilteredFilms(state);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(result).toEqual(state.films.films);
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

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = getFilteredFilms(state);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(result).toEqual([state.films.films[HORROR]]);
  });

  test('should return an empty array if there are no films that match the selected genre', () => {
    const state: DeepPartial<RootState> = {
      films: {
        films: getFilmsListWithGenreMock()},
      genre: {
        selected: GenreName.DRAMAS,
      }
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = getFilteredFilms(state);
    expect(result).toEqual([]);
  });
});
