import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.13:3000',
  // baseURL: 'https://qlove-api.herokuapp.com',
});
api.interceptors.request.use(async (config) => {
  const token = null;
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default api;
