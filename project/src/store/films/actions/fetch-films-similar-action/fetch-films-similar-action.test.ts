import { createAPI } from '../../../../api/api';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {RootState} from '../../../../types/root-state';
import {Action, ThunkDispatch} from '@reduxjs/toolkit';
import {fetchFilmsSimilarAction} from './fetch-films-similar-action.api';

describe('fetch-films-similar-action.test', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middleware = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    RootState,
    Action<string>,
    ThunkDispatch<RootState, typeof api, Action>
  >(middleware);

  test('request status: 200',async () => {
    const store = mockStore();
    const mockId = '1';
    mockAPI
      .onGet(`/films/${mockId}/similar`)
      .reply(200, {id: mockId});

    await store.dispatch(fetchFilmsSimilarAction(mockId));

    const actions = store.getActions().map(({type}) => type);
    expect(actions).toEqual([
      fetchFilmsSimilarAction.pending.type,
      fetchFilmsSimilarAction.fulfilled.type
    ]);
  });
});
