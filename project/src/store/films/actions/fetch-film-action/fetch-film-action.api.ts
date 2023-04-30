import {createAsyncThunk} from '@reduxjs/toolkit';
import {Films} from '../../../../types/films';
import {AxiosInstance} from 'axios';

export const fetchFilmAction = createAsyncThunk<
  Films,
  {
    id: string;
    navigate: () => void;
      },
  {
    extra: AxiosInstance;
  }
      >(
      'films/fetchFilm',
      async ({id, navigate}, { extra: api, rejectWithValue}) => {
        let correctId = true;

        try {
          const response = await api.get<Films>(`films/${id}`);
          return response.data;
        } catch (error) {
          correctId = false;
          return rejectWithValue(error);
        } finally {
          if (!correctId) {
            navigate();
          }
        }
      }
      );
