import { Dispatch } from 'redux';
import {
  SetProductAction,
  ProductActionsType,
  ChangeCrustTypeAction,
  ChangeProductSizeAction,
  AddToppingTypeAction,
  ClearProductAction,
  SetProductProps,
  ChangeSizeProps,
  ChangeCrustTypeProps,
  AddProductToppingProps
} from '../constants';
import { RootState } from '../types';

export const setProduct = (payload: SetProductProps) =>
  (dispatch: Dispatch<SetProductAction>) => {
    dispatch({
      type: ProductActionsType.SET_PRODUCT,
      payload
    });
  };

export const clearProduct = () =>
  (dispatch: Dispatch<ClearProductAction>) => {
    dispatch({
      type: ProductActionsType.CLEAR_PRODUCT,
    });
  }

export const changeSize = (payload: ChangeSizeProps) =>
  (dispatch: Dispatch<ChangeProductSizeAction>, getState: () => RootState) => {

    const stateTopping = getState().product.topping;

    const updatedTopping = payload.topping
      .filter((updatedItem) => stateTopping.find(({ name }) => name === updatedItem.name));

    const {
      sizeId,
      sizeName,
      price,
      diameter,
      imageSrc,
      weight,
    } = payload;

    dispatch({
      type: ProductActionsType.CHANGE_PRODUCT_SIZE,
      payload: {
        sizeId,
        sizeName,
        imageSrc,
        price,
        diameter,
        weight,
        topping: updatedTopping
      }
    })
  };

export const changeCrustType = (payload: ChangeCrustTypeProps) =>
  (dispatch: Dispatch<ChangeCrustTypeAction>) => {

    dispatch({
      type: ProductActionsType.CHANGE_PRODUCT_CRUST_TYPE,
      payload: {
        ...payload
      }
    })
  };

export const addTopping = (payload: AddProductToppingProps) =>
  (dispatch: Dispatch<AddToppingTypeAction>) => {
    dispatch({
      type: ProductActionsType.ADD_PRODUCT_TOPPING,
      payload
    })
  };