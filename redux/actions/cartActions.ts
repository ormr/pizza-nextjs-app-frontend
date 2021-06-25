import { Dispatch } from "redux";
import {
  AddProductToCartAction,
  CartActionsType,
  DeleteCartProductAction,
  UpdateCartProductCountAction,
  AddProductToCartProps,
  UpdateProductCountProps,
  DeleteCartProductProps,
  ClearCartStateAction
} from '../constants';
import { RootState } from "../types";

export const addToCart = () =>
  (dispatch: Dispatch<AddProductToCartAction>, getState: () => RootState) => {
    const {
      name,
      sizeName,
      crustTypeName,
      price,
      imageSrc,
      diameter,
      topping
    } = getState().product;

    const payload: AddProductToCartProps = {
      sizeName,
      crustTypeName,
      price,
      name,
      diameter,
      imageSrc,
      topping,
    }

    dispatch({
      type: CartActionsType.CART_ADD_PRODUCT,
      payload
    })
  }

export const updateProductCount = (payload: UpdateProductCountProps) =>
  (dispatch: Dispatch<UpdateCartProductCountAction>) => {
    dispatch({
      type: CartActionsType.CART_UPDATE_PRODUCT_COUNT,
      payload
    })
  };

export const deleteCartProduct = (payload: DeleteCartProductProps) =>
  (dispatch: Dispatch<DeleteCartProductAction>) => {
    dispatch({
      type: CartActionsType.CART_DELETE_PRODUCT,
      payload
    })
  };

export const clearCart = () => (dispatch: Dispatch<ClearCartStateAction>) => {
  dispatch({
    type: CartActionsType.CART_CLEAR_STATE
  });
}