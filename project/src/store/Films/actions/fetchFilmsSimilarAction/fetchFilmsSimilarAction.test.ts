import { createAPI } from '../../../../api/api';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {RootState} from '../../../../types/rootState';
import {Action, ThunkDispatch} from '@reduxjs/toolkit';
import {fetchFilmsSimilarAction} from './fetchFilmsSimilarAction.api';

describe('fetchFilmsSimilarAction.test', () => {
  // А тут не работает
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
    expect(store.getActions()).toEqual({id: mockId});

    await store.dispatch(fetchFilmsSimilarAction(mockId));

    const actions = store.getActions().map(({type}) => type);
    expect(actions).toEqual([
      fetchFilmsSimilarAction.pending.type,
      fetchFilmsSimilarAction.fulfilled.type
    ]);
  });
});
