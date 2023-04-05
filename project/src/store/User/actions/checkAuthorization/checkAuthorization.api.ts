import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

export const checkAuthorization = createAsyncThunk<
  void,
  undefined,
  {
    extra: AxiosInstance;
  }
>('user/checkAuthorization',
  async (_, {extra: api}) => {
    await api.get('/login');
  }
);
