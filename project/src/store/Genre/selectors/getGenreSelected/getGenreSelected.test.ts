import { DeepPartial } from '@reduxjs/toolkit';
import {RootState} from '../../../../types/rootState';
import {getGenreSelected} from './getGenreSelected';
import {GenreName} from '../../../../types/genre';

describe('getGenreSelected.test', () => {
  test('should return selected genre', () => {
    const state: DeepPartial<RootState> = {
      genre: {
        selected: GenreName.CRIME
      }
    };
    expect(getGenreSelected(state as RootState)).toBe(GenreName.CRIME);
  });
});
