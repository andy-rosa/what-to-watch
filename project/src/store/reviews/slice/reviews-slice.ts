import { createSlice } from '@reduxjs/toolkit';
import { ReviewsState } from '../../../types/reviews';
import {fetchReviewsAction} from '../actions/fetch-reviews/fetch-reviews-action.api';
import {postReviewAction} from '../actions/post-review/post-review-action.api';

const initialState: ReviewsState = {
  reviews: [],
  isLoading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isLoading = false;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.isLoading = true;
      });
  }
});

export default reviewsSlice.reducer;
