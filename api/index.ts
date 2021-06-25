import Cookies from 'nookies';
import axios from 'axios';
import { ProductApi } from './ProductApi';
import { AuthApi } from './AuthApi';

type ApiReturnType = ReturnType<typeof ProductApi> & ReturnType<typeof AuthApi>;

export const Api = (ctx: any): ApiReturnType => {
  const cookies = Cookies.get(ctx);
  const token = cookies.token;

  const instance = axios.create({
    baseURL: 'https://pizza-nextjs-backend.herokuapp.com/',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return [ProductApi, AuthApi].reduce((prev, f) => ({ ...prev, ...f(instance) }), {} as ApiReturnType);
}