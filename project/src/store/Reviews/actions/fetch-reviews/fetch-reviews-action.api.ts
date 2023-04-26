import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {Reviews} from '../../../../types/reviews';

export const fetchReviewsAction = createAsyncThunk<
  Reviews[],
  string,
  {
    extra: AxiosInstance;
  }
>(
  'reviews/fetchReviews',
  async (id, {extra: api}) => {
    const response = await api.get<Reviews[]>(`comments/${id}`);
    return response.data;
  }
);
