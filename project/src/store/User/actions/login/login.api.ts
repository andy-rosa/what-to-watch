import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

//TODO: доделать авторизацию
export const login = createAsyncThunk<
  void,
  undefined,
  {
    extra: AxiosInstance;
    data: { email: string; password: string };
  }
>(
  'user/login',
  async (data, {extra: api}) => {
    await api.post('/login', data);
  }
);
