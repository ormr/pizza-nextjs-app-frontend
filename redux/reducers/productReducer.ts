import { ProductActionTypes, ProductActionsType } from '../constants';

export interface ProductState {
  id: string;
  name: string;
  sizeId: string;
  sizeName: string;
  crustTypeId: string;
  crustTypeName: string;
  price: number;
  imageSrc?: string;
  diameter: number;
  weight: number;
  topping: {
    name: string;
    price: number;
  }[];
}

export const initialProductReducer = {
  id: null,
  name: null,
  sizeId: null,
  sizeName: null,
  crustTypeId: null,
  crustTypeName: null,
  price: null,
  imageSrc: null,
  diameter: null,
  weight: null,
  topping: []
}

export const productReducer = (
  state: ProductState = initialProductReducer,
  action: ProductActionTypes): ProductState => {
  switch (action.type) {
    case ProductActionsType.SET_PRODUCT: {
      return {
        ...action.payload,
        topping: []
      }
    }
    case ProductActionsType.CLEAR_PRODUCT: {
      return initialProductReducer;
    }
    case ProductActionsType.CHANGE_PRODUCT_SIZE: {
      const { price, topping } = action.payload;
      let updatedPrice = price;

      for (let toppingProduct of topping) {
        updatedPrice += toppingProduct.price;
      }

      return {
        ...state,
        ...action.payload,
        price: updatedPrice
      }
    }
    case ProductActionsType.CHANGE_PRODUCT_CRUST_TYPE: {
      const { crustTypeId, crustTypeName, weight, imageSrc } = action.payload;
      return {
        ...state,
        crustTypeId,
        crustTypeName,
        imageSrc,
        weight
      }
    }
    case ProductActionsType.ADD_PRODUCT_TOPPING: {
      const { name, price: currentPrice } = action.payload;
      const topping = state.topping;

      const itemExist = (name: string) => {
        return topping.some((item) => item.name === name);
      }

      const removeItem = (name: string) => {
        return topping.filter((item) => item.name !== name);
      }

      if (!itemExist(name)) {
        return {
          ...state,
          topping: [...topping, { name, price: currentPrice }],
          price: state.price + currentPrice
        }
      } else {
        return {
          ...state,
          topping: removeItem(name),
          price: state.price - currentPrice
        }
      }
    }
    default:
      return state;
  }
}