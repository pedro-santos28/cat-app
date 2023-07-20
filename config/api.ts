import axios, { AxiosRequestConfig } from "axios";

const baseURL = 'https://api.thecatapi.com/v1';

const config: AxiosRequestConfig = {
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const api = axios.create(config);
