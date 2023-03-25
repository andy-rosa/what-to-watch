import {configureStore} from '@reduxjs/toolkit';
import genreSlice from '../../Genre/model/slice/genreSlice';
import {StateSchema} from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      genre: genreSlice
    },
    preloadedState: initialState
  });
}
