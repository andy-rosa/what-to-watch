import {combineReducers} from '@reduxjs/toolkit';
import filmsReducer from './films/slice/films-slice';
import genreReducer from './genre/slice/genre-slice';
import userReducer from './user/slice/user-slice';
import reviewsReducer from './reviews/slice/reviews-slice';

export const rootReducer = combineReducers({
  genre: genreReducer,
  films: filmsReducer,
  user: userReducer,
  reviews: reviewsReducer
});
