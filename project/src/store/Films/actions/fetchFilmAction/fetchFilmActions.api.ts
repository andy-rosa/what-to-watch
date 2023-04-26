import {createAsyncThunk} from '@reduxjs/toolkit';
import {Films} from '../../../../types/films';
import {AxiosInstance} from 'axios';

export const fetchFilmAction = createAsyncThunk<
  Films,
  string,
  {
    extra: AxiosInstance;
  }
>(
  'films/fetchFilm',
  async (id, { extra: api}) => {
    const response = await api.get<Films>(`films/${id}`);
    return response.data;
  }
);
