import React from 'react';

import { Scrollbars } from 'react-custom-scrollbars';
import { Button } from '../Button';
import { ProductSwitch } from './ProductSwitch';
import { ProductTopping } from './ProductTopping';
import { Product } from '../../types/Product.interface';
import {
  ChangeSizeProps,
  ChangeCrustTypeProps,
  AddProductToppingProps,
} from '../../redux/constants';
import { getDefaultProductValue } from '../../utils/getDefaultProductValue';
import { ProductIngredients } from './ProductIngredients';

import classes from './ProductAttributes.module.scss';
import { ProductState } from '../../redux/reducers/productReducer';

interface ProductModalAttributesProps {
  product: Product;
  stateProduct?: ProductState;
  changeSize: (props: ChangeSizeProps) => void;
  changeCrust: (props: ChangeCrustTypeProps) => void;
  addToProduct: (props: AddProductToppingProps) => void;
  addToCart: () => void;
  pushAlert: (message: string) => void;
}

export const ProductAttributes: React.FC<ProductModalAttributesProps> = ({
  product,
  stateProduct,
  changeSize,
  changeCrust,
  addToProduct,
  addToCart,
  pushAlert,
}) => {
  const { crustTypeId, price, sizeId, topping } = stateProduct;

  const defaultProduct = getDefaultProductValue(product, sizeId, crustTypeId);

  const getSwitchSizes = (sizeId = 'medium') => {
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

  const changeProductSize = (sizeId: string) => {
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
          addToProduct({
            name: disabledItem.name,
            price: disabledItem.price,
          });
        }
      }
    });

    changeSize({
      sizeId,
      sizeName,
      price,
      diameter,
      weight,
      imageSrc,
      topping: updatedTopping,
    });
  };

  const changeCrustType = (crustTypeId: string) => {
    const { weight, imageSrc, crustTypeName } = getDefaultProductValue(
      product,
      sizeId,
      crustTypeId
    );
    changeCrust({ crustTypeId, crustTypeName, weight, imageSrc });
  };

  const handleAddToCart = () => {
    addToCart();
    pushAlert(`Добавлено: ${product.name}, ${defaultProduct.diameter}`);
  };

  const handleToppingToProduct = (name: string, price: number) => {
    addToProduct({ name, price });
  };

  const [pick, setPick] = React.useState({
    sizePick: 1,
    crostPick: 0,
  });

  const handleInputChange = (
    item: { id: string; name: string; isDisabled?: boolean },
    inputName: string,
    index: number
  ) => {
    if (inputName === 'sizes') {
      changeProductSize(item.id);

      const { crostTypes: updatedCrostTypes } = getSwitchSizes(item.id);
      const crostHasDisabledItem = updatedCrostTypes.findIndex(
        (item) => item.isDisabled
      );

      if (pick.crostPick === crostHasDisabledItem) {
        const enabledItem = updatedCrostTypes.find((item) => !item.isDisabled);
        const enabledItemIndex = updatedCrostTypes.indexOf(enabledItem);

        setPick({ sizePick: index, crostPick: enabledItemIndex });
        changeCrustType(enabledItem.id);
      } else {
        setPick({ ...pick, sizePick: index });
      }
    }

    if (inputName === 'crost') {
      changeCrustType(item.id);

      setPick({ ...pick, crostPick: index });
    }
  };

  const { sizes, crostTypes } = getSwitchSizes(sizeId);

  return (
    <div className={classes.side}>
      <Scrollbars
        className={classes.scrollbar}
        autoHide
        hideTracksWhenNotNeeded
      >
        <div className={classes.info}>
          <div className={classes.title}>{product.name}</div>
          <div className={classes.about}>
            {defaultProduct.diameter} см, {defaultProduct.crustTypeName} тесто,{' '}
            {defaultProduct.weight} г.
          </div>
          <ProductIngredients ingredients={product.ingredients} />
          <ProductSwitch
            inputName="sizes"
            items={sizes}
            pick={pick.sizePick}
            handleInputChange={handleInputChange}
          />
          <ProductSwitch
            inputName="crost"
            items={crostTypes}
            pick={pick.crostPick}
            handleInputChange={handleInputChange}
          />
          <ProductTopping
            sizeId={defaultProduct.sizeId}
            crustTypeId={defaultProduct.crustTypeId}
            items={product.topping}
            onPickItem={handleToppingToProduct}
          />
        </div>
      </Scrollbars>
      <div className={classes.addToCart}>
        <Button type="primary" size="big" onClick={handleAddToCart}>
          Добавить в корзину за {price} <span>₽</span>
        </Button>
      </div>
    </div>
  );
};
