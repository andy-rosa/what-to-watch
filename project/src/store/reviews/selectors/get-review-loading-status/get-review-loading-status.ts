import {createSelector} from '@reduxjs/toolkit';
import {getReviews} from '../get-reviews/get-reviews';

export const getReviewLoadingStatus = createSelector(
  getReviews,
  (reviews) => reviews.isLoading
);
