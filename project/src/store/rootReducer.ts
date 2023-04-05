import {combineReducers} from '@reduxjs/toolkit';
import filmsReducer from './Films/slice/filmsSlice';
import genreReducer from './Genre/slice/genreSlice';
import userReducer from './User/slice/userSlice';

export const rootReducer = combineReducers({
  genre: genreReducer,
  films: filmsReducer,
  user: userReducer
});
