import { Action } from 'redux';

export enum CartActionsType {
  CART_ADD_PRODUCT = 'CART_ADD_PRODUCT',
  CART_DELETE_PRODUCT = 'CART_DELETE_PRODUCT',
  CART_UPDATE_PRODUCT_COUNT = 'CART_UPDATE_PRODUCT_COUNT',
  CART_CLEAR_STATE = 'CART_CLEAR_STATE'
}

// Props

export interface AddProductToCartProps {
  name: string;
  sizeName: string;
  crustTypeName: string;
  diameter: number;
  price: number;
  imageSrc: string;
  topping: {
    name: string;
    price: number;
  }[];
}

export interface UpdateProductCountProps {
  id: string;
  count: number;
}

export interface DeleteCartProductProps {
  id: string;
}

// Actions

export interface AddProductToCartAction extends Action<CartActionsType> {
  type: CartActionsType.CART_ADD_PRODUCT,
  payload: AddProductToCartProps
}

export interface UpdateCartProductCountAction extends Action<CartActionsType> {
  type: CartActionsType.CART_UPDATE_PRODUCT_COUNT,
  payload: UpdateProductCountProps
}

export interface DeleteCartProductAction extends Action<CartActionsType> {
  type: CartActionsType.CART_DELETE_PRODUCT,
  payload: DeleteCartProductProps
}

export interface ClearCartStateAction extends Action<CartActionsType> {
  type: CartActionsType.CART_CLEAR_STATE,
}

export type CartActionTypes =
  | AddProductToCartAction
  | UpdateCartProductCountAction
  | DeleteCartProductAction
  | ClearCartStateAction;