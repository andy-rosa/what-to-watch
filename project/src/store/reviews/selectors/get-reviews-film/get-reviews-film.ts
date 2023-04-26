import {createSelector} from '@reduxjs/toolkit';
import {getReviews} from '../get-reviews/get-reviews';

export const getReviewsFilm = createSelector(
  getReviews,
  (reviews) => reviews.reviews
);
