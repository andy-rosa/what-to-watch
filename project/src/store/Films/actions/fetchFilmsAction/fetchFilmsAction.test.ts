import { createAPI } from '../../../../api/api';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { fetchFilmsAction } from './fetchFilmsAction.api';
import {RootState} from '../../../../types/rootState';
import {Action, ThunkDispatch} from '@reduxjs/toolkit';

describe('fetchFilmsAction.test', () => {
  // Я тут не понял что наделал, но вроде работает
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
