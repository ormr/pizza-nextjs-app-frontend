import axios from 'axios';
import { parseCookies } from 'nookies';

const cookies = parseCookies();

export const Axios = axios.create({
  baseURL: 'https://pizza-nextjs-backend.herokuapp.com/',
  headers: {
    Authorization: 'Bearer ' + cookies?.token
  }
});