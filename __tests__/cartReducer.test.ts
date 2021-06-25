import {
  AddProductToCartAction,
  CartActionsType,
  CartActionTypes,
  DeleteCartProductAction,
  UpdateCartProductCountAction,
} from '../redux/constants';

import { cartReducer, initialCartReducer } from '../redux/reducers/cartReducer';

import {
  addCartProductMockData,
  initialCartMockData,
  updateProductCountMockData,
  deleteProductMockData,
} from '../__mocks__/mockedCart';

describe('cartReducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(initialCartReducer, {} as any)).toEqual(
      initialCartReducer
    );
  });

  it('should handle CART_ADD_PRODUCT', () => {
    const addCartProduct: AddProductToCartAction = {
      type: CartActionsType.CART_ADD_PRODUCT,
      payload: addCartProductMockData,
    };

    expect(cartReducer(initialCartReducer, addCartProduct).products[0]).toEqual(
      {
        ...addCartProductMockData,
        id: expect.any(String),
        count: 1,
      }
    );
  });

  it('should handle CART_ADD_PRODUCT, compare it and if products match it should update count', () => {
    const addCartProduct: AddProductToCartAction = {
      type: CartActionsType.CART_ADD_PRODUCT,
      payload: addCartProductMockData,
    };

    expect(
      cartReducer(
        {
          products: [initialCartMockData],
        },
        addCartProduct
      ).products[0]
    ).toEqual({ ...initialCartMockData, count: 2 });
  });

  it('should handle CART_UPDATE_PRODUCT_COUNT', () => {
    const updateCartProduct: UpdateCartProductCountAction = {
      type: CartActionsType.CART_UPDATE_PRODUCT_COUNT,
      payload: updateProductCountMockData,
    };

    expect(
      cartReducer(
        {
          products: [
            {
              ...addCartProductMockData,
              id: '9f8ec8a7-1d62-4b6b-81b6-513e676ea0d3',
              count: 1,
            },
          ],
        },
        updateCartProduct
      )
    ).toEqual({
      products: [
        {
          ...addCartProductMockData,
          id: '9f8ec8a7-1d62-4b6b-81b6-513e676ea0d3',
          count: 2,
        },
      ],
    });
  });

  it('should handle CART_DELETE_PRODUCT', () => {
    const deleteCartProduct: DeleteCartProductAction = {
      type: CartActionsType.CART_DELETE_PRODUCT,
      payload: deleteProductMockData,
    };

    expect(
      cartReducer(
        {
          products: [
            {
              ...addCartProductMockData,
              id: '9f8ec8a7-1d62-4b6b-81b6-513e676ea0d3',
              count: 1,
            },
          ],
        },
        deleteCartProduct
      )
    ).toEqual({
      products: [],
    });
  });
});
