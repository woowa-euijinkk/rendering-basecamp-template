import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.TMDB_ACCESS_TOKEN}`,
  },
});
