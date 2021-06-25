import {
  productReducer,
  ProductState,
  initialProductReducer,
} from '../redux/reducers/productReducer';

import {
  AddToppingTypeAction,
  ChangeCrustTypeAction,
  ChangeProductSizeAction,
  ClearProductAction,
  ProductActionsType,
  SetProductAction,
} from '../redux/constants';

import {
  setProductMockData,
  initialProductMockData,
  changeProductSizeMockData,
  changeCrustTypeMockData,
  addToppingMockData,
} from '../__mocks__/mockedProductData';

describe('Product reducer', () => {
  it('should return the initial state', () => {
    expect(productReducer(initialProductMockData, {} as any)).toEqual(
      initialProductMockData
    );
  });
  it('should handle SET_PRODUCT', () => {
    const setProductAction: SetProductAction = {
      type: ProductActionsType.SET_PRODUCT,
      payload: setProductMockData,
    };

    expect(productReducer({} as ProductState, setProductAction)).toEqual({
      ...setProductMockData,
      topping: [],
    });
  });

  it('should handle CLEAR_PRODUCT', () => {
    const clearProductAction: ClearProductAction = {
      type: ProductActionsType.CLEAR_PRODUCT,
    };

    expect(productReducer({} as ProductState, clearProductAction)).toEqual(
      initialProductReducer
    );
  });
  it('should handle CHANGE_PRODUCT_SIZE', () => {
    const changeProductSizeAction: ChangeProductSizeAction = {
      type: ProductActionsType.CHANGE_PRODUCT_SIZE,
      payload: changeProductSizeMockData,
    };

    expect(
      productReducer(initialProductMockData, changeProductSizeAction)
    ).toEqual({
      ...setProductMockData,
      ...changeProductSizeMockData,
      price: 854,
    });
  });

  it('should handle CHANGE_PRODUCT_CRUST_TYPE', () => {
    const changeProductCrustTypeAction: ChangeCrustTypeAction = {
      type: ProductActionsType.CHANGE_PRODUCT_CRUST_TYPE,
      payload: changeCrustTypeMockData,
    };

    expect(
      productReducer(initialProductMockData, changeProductCrustTypeAction)
    ).toEqual({
      ...initialProductMockData,
      ...changeCrustTypeMockData,
    });
  });
  it('should handle ADD_PRODUCT_TOPPING if item not exist', () => {
    const addToppingAction: AddToppingTypeAction = {
      type: ProductActionsType.ADD_PRODUCT_TOPPING,
      payload: addToppingMockData,
    };

    expect(productReducer(initialProductMockData, addToppingAction)).toEqual({
      ...initialProductMockData,
      price: initialProductMockData.price + addToppingMockData.price,
      topping: [addToppingMockData],
    });
  });

  it('should handle ADD_PRODUCT_TOPPING if item exist', () => {
    const addToppingAction: AddToppingTypeAction = {
      type: ProductActionsType.ADD_PRODUCT_TOPPING,
      payload: addToppingMockData,
    };

    expect(
      productReducer(
        {
          ...initialProductMockData,
          price: initialProductMockData.price + addToppingMockData.price,
          topping: [addToppingMockData],
        },
        addToppingAction
      )
    ).toEqual(initialProductMockData);
  });
});
