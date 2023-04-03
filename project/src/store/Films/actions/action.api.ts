import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {Films} from '../../../types/films';

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
