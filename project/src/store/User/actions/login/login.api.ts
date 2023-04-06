import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {User} from '../../../../types/user';
import {setToken} from '../../../../api/localStorage/token';
import {setUserStorage} from '../../../../api/localStorage/user';

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
  async (authData, { extra: api}) => {
    const response = await api.post<User>('/login', authData);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setToken(response.data.token);
    setUserStorage(response.data);
    return response.data;
  }
);
