import {createSlice} from '@reduxjs/toolkit';
import { FilmsState } from '../../../types/films';
import {fetchFilmsAction} from '../actions/fetch-films-action/fetch-films-action.api';
import { fetchFilmsSimilarAction } from '../actions/fetch-films-similar-action/fetch-films-similar-action.api';
import {fetchFilmAction} from '../actions/fetch-film-action/fetch-film-action.api';
import {changeFavoriteFilmStatusAction} from '../actions/change-favorite-film-status-action/change-favorite-film-status-action.api';
import {fetchFavoriteListAction} from '../actions/fetch-favorite-list-action/fetch-favorite-list-action.api';
import {fetchPromoFilmAction} from '../actions/fetch-promo-film-action/fetch-promo-film-action.api';

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
