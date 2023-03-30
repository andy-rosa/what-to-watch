import {combineReducers} from '@reduxjs/toolkit';
import filmsSlice from './Films/slice/filmsSlice';
import genreSlice from './Genre/slice/genreSlice';

export const rootReducer = combineReducers({
  genre: genreSlice,
  films: filmsSlice
});
