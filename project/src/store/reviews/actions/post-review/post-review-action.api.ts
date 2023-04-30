import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {Reviews} from '../../../../types/reviews';

interface PostReview {
  body: {
    comment: string;
    rating: number;
    navigate: () => void;
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
  async ({id, body: {comment, rating, navigate}}, { extra: api, rejectWithValue}) => {
    let isFinish = true;

    try {
      const response = await api.post<Reviews[]>(`comments/${id}`, {comment, rating});
      return response.data;
    } catch (error) {
      isFinish = false;
      return rejectWithValue(error);
    } finally {
      if (isFinish) {
        navigate();
      }
    }
  }
);
