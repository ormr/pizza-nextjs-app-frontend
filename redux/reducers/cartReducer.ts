import { v4 as uuidv4 } from 'uuid';
import { CartActionsType, CartActionTypes } from '../constants';
import { compareTopping } from '../../utils/compareTopping';

export interface Cart {
  id: string;
  name: string;
  sizeName: string;
  crustTypeName: string;
  diameter: number;
  price: number;
  imageSrc: string;
  count: number;
  topping: {
    name: string;
    price: number;
  }[]
}

export interface CartState {
  products: Cart[];
};

export const initialCartReducer = {
  products: []
}

export const cartReducer = (
  state: CartState = initialCartReducer,
  action: CartActionTypes
): CartState => {
  switch (action.type) {
    case CartActionsType.CART_ADD_PRODUCT: {
      const { name, sizeName, crustTypeName, diameter, price, topping, imageSrc } = action.payload;

      const newProducts = [...state.products];

      const productIndex = newProducts.findIndex((product) => product.name === name
        && product.sizeName === sizeName
        && product.crustTypeName === crustTypeName
        && product.diameter === diameter
        && product.price === price
        && compareTopping(topping, product.topping));

      const product = newProducts[productIndex];

      if (product) {
        newProducts[productIndex] = { ...product, count: product.count + 1 };

        return { products: newProducts }
      } else {
        const newProduct = { ...action.payload, id: uuidv4(), count: 1 };

        return { products: [...state.products, newProduct] };
      }
    }
    case CartActionsType.CART_UPDATE_PRODUCT_COUNT: {
      const { id, count } = action.payload;

      const productIndex = state.products.findIndex((product) => product.id === id);

      const newProducts = [...state.products];

      newProducts[productIndex] = { ...newProducts[productIndex], count };

      return {
        products: newProducts
      };
    }
    case CartActionsType.CART_DELETE_PRODUCT: {
      const { id } = action.payload;
      const newProducts = state.products.filter((product) => product.id !== id);

      return {
        products: newProducts
      }
    }
    case CartActionsType.CART_CLEAR_STATE: {
      return {
        products: []
      }
    }
    default:
      return state;
  }
}