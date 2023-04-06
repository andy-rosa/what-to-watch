import { createSelector } from '@reduxjs/toolkit';
import {getUser} from '../getUser/getUser';

export const getUserAvatar = createSelector(
  getUser,
  (user) => user.user?.avatarUrl
);
