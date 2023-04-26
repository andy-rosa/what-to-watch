import {createAsyncThunk} from '@reduxjs/toolkit';
import {Films} from '../../../../types/films';
import {AxiosInstance} from 'axios';

export const fetchFilmsAction = createAsyncThunk<
  Films[],
  undefined,
  {
    extra: AxiosInstance;
  }
>(
  'films/fetchFilms',
  async (_arg, { extra: api}) => {
    const response = await api.get<Films[]>('films');
    return response.data;
  });
