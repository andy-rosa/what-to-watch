import {createAsyncThunk} from '@reduxjs/toolkit';
import {Films} from '../../../../types/films';
import {AxiosInstance} from 'axios';

export enum ChangeType {
  Remove,
  Add
}

export const changeFavoriteFilmStatusAction = createAsyncThunk<
  Films,
  {id: number; type: ChangeType},
  {
    extra: AxiosInstance;
  }
>('favorite/changeFavoriteFilmStatus',
  async ({id, type}, {extra: api}) => {
    const response = await api.post<Films>(`favorite/${id}/${type}`);
    return response.data;
  });
