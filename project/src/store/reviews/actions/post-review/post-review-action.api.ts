import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {Reviews} from '../../../../types/reviews';

interface PostReview {
  body: {
    comment: string;
    rating: number;
  };
  id: string;
}

export const postReviewAction = createAsyncThunk<
  Reviews[],
  PostReview,
   {
    extra: AxiosInstance;
  }
>(
  'reviews/postReview',
  async ({id, body}, { extra: api}) => {
    const response = await api.post<Reviews[]>(`comments/${id}`, body);
    return response.data;
  }
);
