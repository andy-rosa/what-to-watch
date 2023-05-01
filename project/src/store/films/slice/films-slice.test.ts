import filmsReducer from './films-slice';
import { FilmsState } from '../../../types/films';
import {generateFilmsListMock} from '../mock-test/generate-films-list-mock';
import {fetchFilmsAction} from '../actions/fetch-films-action/fetch-films-action.api';
import {fetchFilmsSimilarAction} from '../actions/fetch-films-similar-action/fetch-films-similar-action.api';

describe('filmsSlice reducer', () => {
  let initialState: FilmsState;

  beforeEach(() => {
    initialState = {
      films: [],
      film: null,
      isLoading: false,
      error: null,
      favoriteList: [],
      promoFilm: null
    };
  });

  it('should return the initial state', () => {
    expect(filmsReducer(undefined, {} as never)).toEqual(initialState);
  });

  it('should handle fetch-films-action.fulfilled', () => {
    const payload = generateFilmsListMock(3);
    const expectedState: FilmsState = {
      ...initialState,
      films: payload,
      isLoading: false,
    };
    expect(filmsReducer(
      initialState, fetchFilmsAction.fulfilled(payload, '', undefined)
    )).toEqual(expectedState);
  });

  it('should handle fetch-films-action.pending', () => {
    const expectedState: FilmsState = {
      ...initialState,
      isLoading: true,
    };
    expect(filmsReducer(
      initialState, fetchFilmsAction.pending('',undefined))
    ).toEqual(expectedState);
  });

  it('should handle fetch-films-similar-action.fulfilled', () => {
    const payload = generateFilmsListMock(2);
    const expectedState: FilmsState = {
      ...initialState,
      films: payload,
      isLoading: false,
    };
    expect(filmsReducer(
      initialState, fetchFilmsSimilarAction.fulfilled(payload, '', ''))
    ).toEqual(expectedState);
  });

  it('should handle fetch-films-similar-action.pending', () => {
    const expectedState: FilmsState = {
      ...initialState,
      isLoading: true,
    };
    expect(filmsReducer(
      initialState, fetchFilmsSimilarAction.pending('', ''))
    ).toEqual(expectedState);
  });
});
