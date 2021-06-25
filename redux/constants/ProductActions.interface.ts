import { Action } from 'redux';

export enum ProductActionsType {
  SET_PRODUCT = 'SET_PRODUCT',
  CLEAR_PRODUCT = 'CLEAR_PRODUCT',
  CHANGE_PRODUCT_SIZE = 'CHANGE_PRODUCT_SIZE',
  CHANGE_PRODUCT_CRUST_TYPE = 'CHANGE_PRODUCT_CRUST_TYPE',
  ADD_PRODUCT_TOPPING = 'ADD_PRODUCT_TOPPING'
}

// Props

export interface SetProductProps {
  id: string;
  name: string;
  sizeId: string;
  sizeName: string;
  crustTypeId: string;
  crustTypeName: string;
  price: number;
  imageSrc: string;
  diameter: number;
  weight: number;
};

export interface ChangeSizeProps {
  sizeId: string;
  sizeName: string;
  imageSrc: string;
  price: number;
  diameter: number;
  weight: number;
  topping: {
    name: string;
    price: number;
  }[]
};

export interface ChangeCrustTypeProps {
  crustTypeId: string;
  crustTypeName: string;
  imageSrc: string;
  weight: number;
};

export interface AddProductToppingProps {
  name: string
  price: number;
};

// Actions

export interface SetProductAction extends Action<ProductActionsType> {
  type: ProductActionsType.SET_PRODUCT,
  payload: SetProductProps
};

export interface ChangeProductSizeAction extends Action<ProductActionsType> {
  type: ProductActionsType.CHANGE_PRODUCT_SIZE,
  payload: ChangeSizeProps
};

export interface ChangeCrustTypeAction extends Action<ProductActionsType> {
  type: ProductActionsType.CHANGE_PRODUCT_CRUST_TYPE,
  payload: ChangeCrustTypeProps
}

export interface AddToppingTypeAction extends Action<ProductActionsType> {
  type: ProductActionsType.ADD_PRODUCT_TOPPING,
  payload: AddProductToppingProps
}

export interface ClearProductAction extends Action<ProductActionsType> {
  type: ProductActionsType.CLEAR_PRODUCT
}

export type ProductActionTypes =
  | SetProductAction
  | ClearProductAction
  | ChangeProductSizeAction
  | ChangeCrustTypeAction
  | AddToppingTypeAction;