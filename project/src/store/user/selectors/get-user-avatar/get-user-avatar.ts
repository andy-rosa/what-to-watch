import { createSelector } from '@reduxjs/toolkit';
import {getUser} from '../get-user/get-user';

export const getUserAvatar = createSelector(
  getUser,
  (user) => user.user?.avatarUrl
);
