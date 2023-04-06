import { createSelector } from '@reduxjs/toolkit';
import { getUser } from '../getUser/getUser';

export const getUserAuthStatus = createSelector(
  getUser,
  (user) => user.authorizationStatus
);
