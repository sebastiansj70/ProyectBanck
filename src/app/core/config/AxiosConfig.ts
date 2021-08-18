import axios from 'axios';

export const axiosIntance = axios.create({
  baseURL: 'https://run.mocky.io/v3/ed79ce34-5ed2-4613-a8a9-d573793fa009',
  timeout: 30000,
  headers: { 'X-Custom-Header': 'foobar' },
});
