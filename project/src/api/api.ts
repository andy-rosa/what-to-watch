import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {getToken} from './token';

const BACKEND_URL = ' https://12.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers['x-token'] = `Bearer ${token}`;
      }
      return config;
    });

  return api;
};
