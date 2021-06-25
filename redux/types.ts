import { AlertState } from './reducers/alertReducer';
import { CartState } from './reducers/cartReducer';
import { ProductState } from './reducers/productReducer';
import { UserState } from './reducers/userReducer';

export enum LoadingStatus {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  SUCCESS = 'SUCCESS'
}

export interface RootState {
  alert: AlertState;
  cart: CartState;
  product: ProductState;
  user: UserState;
}