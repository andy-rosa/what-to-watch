import filmsReducer from './filmsSlice';
import { FilmsState } from '../../../types/films';
import {generateFilmsListMock} from '../mock-test/generateFilmsListMock';
import {fetchFilmsAction} from '../actions/fetchFilmsAction/fetchFilmsAction.api';
import {fetchFilmsSimilarAction} from '../actions/fetchFilmsSimilarAction/fetchFilmsSimilarAction.api';

describe('filmsSlice reducer', () => {
  let initialState: FilmsState;

  beforeEach(() => {
    initialState = {
      films: [],
      film: null,
      isLoading: false,
      error: null,
      favoriteList: [],
    };
  });

  it('should return the initial state', () => {
    expect(filmsReducer(undefined, {} as never)).toEqual(initialState);
  });

  it('should handle fetchFilmsAction.fulfilled', () => {
    const payload = generateFilmsListMock(3);
    const expectedState: FilmsState = {
      ...initialState,
      films: payload,
      isLoading: false,
    };
    expect(filmsReducer(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      initialState, fetchFilmsAction.fulfilled(payload)
    )).toEqual(expectedState);
  });

  it('should handle fetchFilmsAction.pending', () => {
    const expectedState: FilmsState = {
      ...initialState,
      isLoading: true,
    };
    expect(filmsReducer(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      initialState, fetchFilmsAction.pending(undefined, undefined))
    ).toEqual(expectedState);
  });

  it('should handle fetchFilmsSimilarAction.fulfilled', () => {
    const payload = generateFilmsListMock(2);
    const expectedState: FilmsState = {
      ...initialState,
      films: payload,
      isLoading: false,
    };
    expect(filmsReducer(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      initialState, fetchFilmsSimilarAction.fulfilled(payload))
    ).toEqual(expectedState);
  });

  it('should handle fetchFilmsSimilarAction.pending', () => {
    const expectedState: FilmsState = {
      ...initialState,
      isLoading: true,
    };
    expect(filmsReducer(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      initialState, fetchFilmsSimilarAction.pending(undefined, undefined))
    ).toEqual(expectedState);
  });
});
