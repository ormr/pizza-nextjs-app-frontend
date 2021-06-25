import { RootState } from './types';

export const selectUserData = (state: RootState) => state.user.data;
export const selectAlertData = (state: RootState) => state.alert;
export const selectProduct = (state: RootState) => state.product;
export const selectCartProducts = (state: RootState) => state.cart.products;