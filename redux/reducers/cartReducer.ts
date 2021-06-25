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
    case CartActionsType.CART_ADD_PRODUCT:
      const { name, sizeName, crustTypeName, diameter, price, topping, imageSrc } = action.payload;

      const productIndex = state.products.findIndex((product) => product.name === name
        && product.sizeName === sizeName
        && product.crustTypeName === crustTypeName
        && product.diameter === diameter
        && product.price === price
        && compareTopping(topping, product.topping));

      const product = state.products[productIndex];

      const newProduct = { ...action.payload, id: uuidv4(), count: 1 };

      if (product) {
        return {
          products: [
            ...state.products.slice(0, productIndex - 1),
            { ...product, count: product.count + 1 },
            ...state.products.slice(productIndex + 1)
          ]
        }
      }
      return { products: [...state.products, newProduct] };
    case CartActionsType.CART_UPDATE_PRODUCT_COUNT: {
      const { id, count } = action.payload;

      const productIndex = state.products.findIndex((product) => product.id === id);
      const product = state.products[productIndex];

      return {
        products: [
          ...state.products.slice(0, productIndex - 1),
          { ...product, count },
          ...state.products.slice(productIndex + 1)
        ]
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