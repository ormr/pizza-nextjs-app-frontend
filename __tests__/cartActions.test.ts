import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { CartActionsType } from '../redux/constants/CartActions.interface';
import { addCartProductMockData, deleteProductMockData, initialCartMockData, updateProductCountMockData } from '../__mocks__/mockedCart'
import { addToCart, deleteCartProduct, updateProductCount } from '../redux/actions';
import { initialProductMockData } from '../__mocks__/mockedProductData';
import { RootState } from '../redux/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Cart actions', () => {
  it('implements CART_ADD_PRODUCT action', () => {
    const store = mockStore({ stack: [], product: initialProductMockData }) as MockStoreEnhanced<RootState>;

    const expectedActions = [{
      type: CartActionsType.CART_ADD_PRODUCT,
      payload: addCartProductMockData
    }];

    addToCart()(store.dispatch, store.getState);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('implements CART_UPDATE_PRODUCT_COUNT action', () => {
    const store = mockStore({ stack: [{ ...initialCartMockData, id: updateProductCountMockData.id, }] });
    const expectedActions = [{
      type: CartActionsType.CART_UPDATE_PRODUCT_COUNT,
      payload: updateProductCountMockData
    }];

    updateProductCount(updateProductCountMockData)(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('implements CART_DELETE_PRODUCT action', () => {
    const store = mockStore({ stack: [{ ...initialCartMockData, id: updateProductCountMockData.id, }] });
    const expectedActions = [{
      type: CartActionsType.CART_DELETE_PRODUCT,
      payload: deleteProductMockData
    }];

    deleteCartProduct(deleteProductMockData)(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  })
});