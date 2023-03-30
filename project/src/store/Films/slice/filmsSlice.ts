import {createSlice} from '@reduxjs/toolkit';
import { FilmsState } from '../../../types/films';
import {fetchFilmsAction, fetchFilmsSimilarAction} from '../actions/action.api';

const initialState: FilmsState = {
  films: [],
  isLoading: false,
  error: null
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
          state.isLoading = false;
        })
      .addCase(fetchFilmsAction.pending,
        (state) => {
          state.isLoading = true;
        })
      .addCase(fetchFilmsSimilarAction.fulfilled,
        (state, action) => {
          state.films = action.payload;
          state.isLoading = false;
        })
      .addCase(fetchFilmsSimilarAction.pending,
        (state) => {
          state.isLoading = true;
        });
  }
});

export default filmsSlice.reducer;
