import { DeepPartial } from '@reduxjs/toolkit';
import {RootState} from '../../../../types/root-state';
import {getGenreSelected} from './get-genre-selected';
import {GenreName} from '../../../../types/genre';

describe('get-genre-selected.test', () => {
  test('should return selected genre', () => {
    const state: DeepPartial<RootState> = {
      genre: {
        selected: GenreName.CRIME
      }
    };
    expect(getGenreSelected(state as RootState)).toBe(GenreName.CRIME);
  });
});
