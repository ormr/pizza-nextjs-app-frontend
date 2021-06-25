import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addTopping, changeCrustType, changeSize, clearProduct, setProduct } from '../redux/actions';
import { ProductActionsType } from '../redux/constants';
import { initialProductReducer } from '../redux/reducers/productReducer';
import { RootState } from '../redux/types';
import { addToppingMockData, changeCrustTypeMockData, changeProductSizeMockData, initialProductMockData, initialProductMockDataWithTopping, setProductMockData } from '../__mocks__/mockedProductData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Product actions', () => {
  it('implements SET_PRODUCT action', () => {
    const store = mockStore({ product: initialProductReducer });

    const expectedActions = [
      {
        type: ProductActionsType.SET_PRODUCT,
        payload: setProductMockData
      }
    ];

    setProduct(setProductMockData)(store.dispatch);

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('implements CHANGE_PRODUCT_SIZE action', () => {
    const store = mockStore({ product: initialProductMockDataWithTopping }) as MockStoreEnhanced<RootState>;

    const expectedActions = [
      {
        type: ProductActionsType.CHANGE_PRODUCT_SIZE,
        payload: changeProductSizeMockData
      }
    ];

    changeSize(changeProductSizeMockData)(store.dispatch, store.getState);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('implements CHANGE_PRODUCT_CRUST_TYPE action', () => {
    const store = mockStore({ product: initialProductMockDataWithTopping }) as MockStoreEnhanced<RootState>;

    const expectedActions = [
      {
        type: ProductActionsType.CHANGE_PRODUCT_CRUST_TYPE,
        payload: changeCrustTypeMockData,
      }
    ];

    changeCrustType(changeCrustTypeMockData)(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('implements ADD_PRODUCT_TOPPING action', () => {
    const store = mockStore({ product: initialProductMockData });

    const expectedActions = [
      {
        type: ProductActionsType.ADD_PRODUCT_TOPPING,
        payload: addToppingMockData
      }
    ];
    addTopping(addToppingMockData)(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('implements CLEAR_PRODUCT action', () => {
    const store = mockStore({ product: initialProductMockData });

    const expectedActions = [
      {
        type: ProductActionsType.CLEAR_PRODUCT,
      }
    ];

    clearProduct()(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });
})