const AUTH_TOKEN_KEY_NAME = 'what-the-watch-api-token';

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ? token : '';
};

export const setToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const removeToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
