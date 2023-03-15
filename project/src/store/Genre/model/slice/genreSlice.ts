import {createSlice} from '@reduxjs/toolkit';
import {GenreName, GenreSchema} from '../types/genreSchema';

const initialState: GenreSchema = {
  activeGenre: GenreName.ALL_GENRES
};

const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    chooseGenre(state, action: { payload: GenreName }) {
      state.activeGenre = action.payload;
    },

  },
});

export const { actions: genreActions } = genreSlice;
export const { reducer: genreReducer } = genreSlice;
