import {createSlice} from '@reduxjs/toolkit';
import { FilmsState } from '../../../types/films';
import {fetchFilmsAction} from '../actions/fetchFilmsAction/fetchFilmsAction.api';
import { fetchFilmsSimilarAction } from '../actions/fetchFilmsSimilarAction/fetchFilmsSimilarAction.api';
import {fetchFilmAction} from '../actions/fetchFilmAction/fetchFilmActions.api';
import {changeFavoriteFilmStatusAction} from '../actions/changeFavoriteFilmStatusAction/changeFavoriteFilmStatus.api';
import {fetchFavoriteListAction} from '../actions/fetchFavoriteListAction/fetchFavoriteListAction.api';
import {fetchPromoFilmAction} from '../actions/fetchPromoFilmAction/fetchPromoFilmAction.api';

const initialState: FilmsState = {
  films: [],
  isLoading: false,
  error: null,
  film: null,
  favoriteList: [],
  promoFilm: null
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
        })
      .addCase(fetchFilmAction.fulfilled,
        (state, action) => {
          state.film = action.payload;
          state.isLoading = false;
        })
      .addCase(fetchFilmAction.pending,
        (state) => {
          state.isLoading = true;
        })
      .addCase(changeFavoriteFilmStatusAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isLoading = false;
      })
      .addCase(changeFavoriteFilmStatusAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFavoriteListAction.fulfilled, (state, action) => {
        state.favoriteList = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFavoriteListAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isLoading = true;
      });
  }
});

export default filmsSlice.reducer;
