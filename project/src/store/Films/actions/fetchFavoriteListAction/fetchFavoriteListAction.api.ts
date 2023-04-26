import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {Films} from '../../../../types/films';

export const fetchFavoriteListAction = createAsyncThunk<
Films[],
  undefined,
  {
    extra: AxiosInstance;
  }
>('favorite/fetchFavoriteList',
  async (_, {extra: api}) => {
    const response = await api.get<Films[]>('favorite');
    return response.data;
  });
