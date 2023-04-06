import {User} from '../../types/user';

const USER_KEY_NAME = 'what-the-watch-api-user';

export const getUserStorage = (): User | string => {
  const user = localStorage.getItem(USER_KEY_NAME);
  return user ? JSON.parse(user) as User : '';
};

export const setUserStorage = (user: User): void => {
  localStorage.setItem(USER_KEY_NAME, JSON.stringify(user));
};

export const removeUserStorage = (): void => {
  localStorage.removeItem(USER_KEY_NAME);
};
