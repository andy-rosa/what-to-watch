import { createSelector } from '@reduxjs/toolkit';
import { getUser } from '../get-user/get-user';

export const getUserAuthStatus = createSelector(
  getUser,
  (user) => user.authorizationStatus
);
