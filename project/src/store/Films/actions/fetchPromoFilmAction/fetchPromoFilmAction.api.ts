import {createAsyncThunk} from '@reduxjs/toolkit';
import {Films} from '../../../../types/films';
import {AxiosInstance} from 'axios';

export const fetchPromoFilmAction = createAsyncThunk<
Films,
  undefined,
  {
    extra: AxiosInstance;
  }
>(
  'fetchPromoFilmAction',
  async (_, {extra: api}) => {
    const response = await api.get<Films>('/promo');
    return response.data;
  }
);

