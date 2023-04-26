import {createAsyncThunk} from '@reduxjs/toolkit';
import {Films} from '../../../../types/films';
import {AxiosInstance} from 'axios';

export const fetchFilmsSimilarAction = createAsyncThunk<
  Films[],
  string,
  {
    extra: AxiosInstance;
  }
>(
  'films/fetchFilmsSimilar',
  async (id, { extra: api}) => {
    const response = await api.get<Films[]>(`films/${id}/similar`);
    return response.data;
  }
);
