import { createAPI } from '../../../../api/api';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { fetchFilmsAction } from './fetch-films-action.api';
import {RootState} from '../../../../types/root-state';
import {Action, ThunkDispatch} from '@reduxjs/toolkit';

describe('fetch-films-action.test', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    RootState,
    Action<string>,
    ThunkDispatch<RootState, typeof api, Action>
  >(middlewares);

  test('request status: 200',async () => {
    const store = mockStore();
    mockAPI
      .onGet('/films')
      .reply(200, []);
    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchFilmsAction());

    const actions = store.getActions().map(({type}) => type);
    expect(actions).toEqual([
      fetchFilmsAction.pending.type,
      fetchFilmsAction.fulfilled.type
    ]);
  });
});
