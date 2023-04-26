import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {User} from '../../../../types/user';
import {setToken} from '../../../../api/local-storage/token';

export interface UserAuthPost {
  email: string;
  password: string;
}

export const loginAction = createAsyncThunk<
  User,
  UserAuthPost,
  {
    extra: AxiosInstance;
  }
>(
  'user/login',
  async (authData, { dispatch, extra: api}) => {
    const response = await api.post<User>('/login', authData);
    setToken(response.data.token);
    return response.data;
  }
);
