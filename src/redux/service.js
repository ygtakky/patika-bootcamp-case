import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://6249a1e8fd7e30c51c042ccb.mockapi.io/api'
});