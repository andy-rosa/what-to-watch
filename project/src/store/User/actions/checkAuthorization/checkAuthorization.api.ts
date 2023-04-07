import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {User} from '../../../../types/user';

export const checkAuthorization = createAsyncThunk<
  User,
  undefined,
  {
    extra: AxiosInstance;
  }
>('user/checkAuthorization',
  async (_, {dispatch, extra: api}) => {
    const response = await api.get<User>('/login');
    return response.data;
  }
);
