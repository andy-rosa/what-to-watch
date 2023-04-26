import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import {createAPI} from '../api/api';

const appApi = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: appApi
      }
    })
});

