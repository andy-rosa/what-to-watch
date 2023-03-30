import {createSlice} from '@reduxjs/toolkit';
import { FilmsState } from '../../../types/films';
import {fetchFilmsAction, fetchFilmsSimilarAction} from '../actions/action.api';

const initialState: FilmsState = {
  films: [],
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmsAction.fulfilled,
        (state, action) => {
          state.films = action.payload;
        })
      .addCase(fetchFilmsSimilarAction.fulfilled,
        (state, action) => {
          state.films = action.payload;
        });
  }
});

export default filmsSlice.reducer;
