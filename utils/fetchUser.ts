import { Dispatch } from 'redux';
import { Api } from '../api';
import { Axios } from '../core/axios';
import { parseCookies } from 'nookies';

const cookies = parseCookies();

const fetchUser = async () => {
  if (!cookies.token) return null;
  const data = await Api(Axios).getMe();
  return data;
};

export { fetchUser }