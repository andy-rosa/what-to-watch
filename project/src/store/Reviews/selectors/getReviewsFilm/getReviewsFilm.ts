import {createSelector} from '@reduxjs/toolkit';
import {getReviews} from '../getReviews/getReviews';

export const getReviewsFilm = createSelector(
  getReviews,
  (reviews) => reviews.reviews
);
