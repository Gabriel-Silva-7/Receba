import axios from 'axios';
import { API_URL } from './env';

export const api = axios.create({
  baseURL: API_URL,
});

console.log('chamou a api');

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  console.log('chamou a api');
  console.log(config);
  return config;
});
