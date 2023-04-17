import {GenreName, GenreState} from '../../../types/genre';
import genreSlice, {genreActions} from './genreSlice';

describe('genreSlice.test', () => {
  test('check initial state genre', () => {
    expect(genreSlice(
      undefined,
      {type: 'UNKNOWN_ACTION'}
    )).toEqual({ selected: GenreName.ALL_GENRES, });
  });
  test('change selected genre', () => {
    const state = {
      selected: GenreName.ALL_GENRES
    };
    expect(genreSlice(
      state as GenreState,
      genreActions.select(GenreName.CRIME)
    )).toEqual({ selected: GenreName.CRIME, });
  });
});
