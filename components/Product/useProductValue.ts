import React from 'react';
import { useDispatch } from 'react-redux';
import { setProduct } from '../../redux/actions';
import { SetProductProps } from '../../redux/constants/ProductActions.interface';
import { Product } from '../../types/Product.interface';
import { getDefaultProductValue } from '../../utils/getDefaultProductValue';

export const useProductValue = (
  product: Product,
  sizeId: string = 'medium',
  crustTypeId: string = 'default'
) => {
  // const dispatch = useDispatch();
  // const [value, setValue] = React.useState({} as any);

  // React.useEffect(() => {
  //   const productValue = getDefaultProductValue(product, sizeId, crustTypeId);
  //   console.log(productValue)
  //   dispatch(setProduct(productValue))
  //   setValue(productValue);
  // }, [product]);
  let value = ''

  React.useEffect(() => {
    value = 'dasdasds';
  });

  return value;
}