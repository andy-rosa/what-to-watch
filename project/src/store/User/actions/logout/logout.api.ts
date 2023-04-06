import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {removeToken} from '../../../../api/localStorage/token';
import {removeUserStorage} from '../../../../api/localStorage/user';

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {extra: AxiosInstance}
>(
  'user/logout',
  async (_, {extra: api}) => {
    await api.delete('/logout');
    removeToken();
    removeUserStorage();
  }
);
