import {createSlice} from '@reduxjs/toolkit';
import { AuthorizationStatus, UserState} from '../../../types/user';
import { checkAuthorization } from '../actions/checkAuthorization/checkAuthorization.api';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthorization.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthorization.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export const { actions: userActions } = userSlice;
export default userSlice.reducer;
