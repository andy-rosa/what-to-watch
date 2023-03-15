import {configureStore} from '@reduxjs/toolkit';
import {StateSchema} from './StateSchema';
import {genreReducer} from '../../Genre/model/slice/genreSlice';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      genre: genreReducer
    },
    preloadedState: initialState
  });
}
