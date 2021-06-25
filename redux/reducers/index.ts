import { combineReducers } from 'redux';
import { RootState } from '../types';
import { alertReducer } from './alertReducer';
import { cartReducer } from './cartReducer';
import { productReducer } from './productReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers<RootState>({
  alert: alertReducer,
  cart: cartReducer,
  product: productReducer,
  user: userReducer
});