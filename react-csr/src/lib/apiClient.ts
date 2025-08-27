import axios from 'axios';
import { ENV } from '../api/env';

export const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ENV.TMDB_ACCESS_TOKEN}`,
  },
});
