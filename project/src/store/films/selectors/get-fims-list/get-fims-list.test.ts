import {DeepPartial} from '@reduxjs/toolkit';
import {FilmsState} from '../../../../types/films';
import {generateFilmsListMock} from '../../mock-test/generate-films-list-mock';
import { getFilmsList } from './get-fims-list';
import {RootState} from '../../../../types/root-state';

describe('getFilmsList selector', () => {
  test('returns films from the state', () => {
    const state: DeepPartial<RootState> = {
      films:
        {
          films: generateFilmsListMock(3)
        }
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const filmsList = getFilmsList(state) as DeepPartial<FilmsState>;
    expect(filmsList).toHaveLength(3);
    expect(filmsList).toEqual([
      { id: 0, name: 'Film 0' },
      { id: 1, name: 'Film 1' },
      { id: 2, name: 'Film 2' },
    ]);
  });

  test('returns empty array if there are no films in the state', () => {
    const state: DeepPartial<RootState> = {
      films:
        {
          films: []
        }
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const filmsList = getFilmsList(state);
    expect(filmsList).toEqual([]);
  });
});
