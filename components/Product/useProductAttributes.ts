import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, addTopping, changeCrust, changeSize, pushAlert } from '../../redux/actions';
import { ProductState } from '../../redux/reducers/productReducer';
import { Product } from '../../types/Product.interface';
import { getDefaultProductValue } from '../../utils/getDefaultProductValue';

interface ChangeItem {
  id: string;
  name: string;
  isDisabled?: boolean
}

export const useProductAttributes = (product: Product, stateProduct: ProductState) => {
  const dispatch = useDispatch();
  const { sizeId, crustTypeId, topping } = stateProduct;
  const { imageSrc } = getDefaultProductValue(product, sizeId ? sizeId : 'medium', crustTypeId ? crustTypeId : 'default')
  const [pick, setPick] = React.useState({
    sizePick: 1,
    crostPick: 0,
  });

  const getSwitchSizes = (sizeId = 'medium', product: Product) => {
    const mediumSize = product.sizes.find(({ sizeId }) => sizeId === 'medium');

    const currentSize = sizeId
      ? product.sizes.find((item) => item.sizeId === sizeId)
      : mediumSize;

    const sizes = product.sizes.map(({ sizeId: id, sizeName: name }) => ({
      id,
      name,
      isDisabled: false,
    }));

    const crostTypes = currentSize.crustTypes.map(
      ({ crustTypeId, crustTypeName, isDisabled }) => ({
        id: crustTypeId,
        name: crustTypeName,
        isDisabled,
      })
    );

    return {
      sizes,
      crostTypes,
    };
  };

  const changeProductSize = (sizeId: string, crustTypeId: string) => {
    const resizedProduct = getDefaultProductValue(product, sizeId);
    const { sizeName, price, diameter, weight, imageSrc } = resizedProduct;

    const updatedTopping = product.topping.map(({ name, prices }) => {
      const { price } = prices.find((item) => item.sizeId === sizeId);
      return { name, price };
    });

    product.topping.map(({ name, isDisabledFor }) => {
      const isDisabled =
        isDisabledFor.sizes.includes(sizeId) ||
        isDisabledFor.crustType.includes(crustTypeId);

      if (isDisabled) {
        const disabledItem = topping.find((item) => item.name === name);

        if (disabledItem) {
          dispatch(
            addTopping({
              name: disabledItem.name,
              price: disabledItem.price,
            })
          );
        }
      }
    });

    dispatch(
      changeSize({
        sizeId,
        sizeName,
        price,
        diameter,
        weight,
        imageSrc,
        topping: updatedTopping,
      })
    );
  };

  const changeCrustType = (sizeId: string, crustTypeId: string) => {
    const { weight, imageSrc, crustTypeName } = getDefaultProductValue(
      product,
      sizeId,
      crustTypeId
    );
    dispatch(changeCrust({ crustTypeId, crustTypeName, weight, imageSrc }));
  };

  const handleSizeChange = (item: ChangeItem, index: number) => {
    changeProductSize(item.id, crustTypeId);

    const { crostTypes: updatedCrostTypes } = getSwitchSizes(item.id, product);
    const crostHasDisabledItem = updatedCrostTypes.findIndex(
      (item) => item.isDisabled
    );

    if (pick.crostPick === crostHasDisabledItem) {
      const enabledItem = updatedCrostTypes.find((item) => !item.isDisabled);
      const enabledItemIndex = updatedCrostTypes.indexOf(enabledItem);

      setPick({ sizePick: index, crostPick: enabledItemIndex });
      changeCrustType(sizeId, enabledItem.id);
    } else {
      setPick({ ...pick, sizePick: index });
    }
  };

  const handleCrostChange = (item: ChangeItem, index: number) => {
    changeCrustType(sizeId, item.id);

    setPick({ ...pick, crostPick: index });
  };

  const handleToppingToProduct = (name: string, price: number) => {
    dispatch(addTopping({ name, price }));
  };

  const { sizes, crostTypes } = useMemo(
    () => getSwitchSizes(sizeId, product),
    [sizeId]
  );

  return {
    sizes,
    crostTypes,
    pick,
    imageSrc,
    handleSizeChange,
    handleCrostChange,
    handleToppingToProduct,
  };
};