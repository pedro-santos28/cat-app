import axios, { AxiosRequestConfig } from 'axios';
import { API_KEY } from '@env';

const baseURL = `https://api.thecatapi.com/v1`;

const config: AxiosRequestConfig = {
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  },
};

export const api = axios.create(config);
export const fetcher = (url: string) => api.get(url).then((res) => res.data);
