import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import classes from './Product.module.scss';

import {
  setProduct,
  changeSize,
  changeCrustType,
  addTopping,
  addToCart,
  pushAlert,
  clearProduct,
} from '../../redux/actions';

import {
  SetProductProps,
  ChangeSizeProps,
  ChangeCrustTypeProps,
  AddProductToppingProps,
} from '../../redux/constants';

import {
  GetDefaultProductValue,
  getDefaultProductValue,
} from '../../utils/getDefaultProductValue';

import { Product } from '../../types/Product.interface';
import { ProductAttributes } from './ProductAttributes';
import { ProductPreview } from './ProductPreview';
import { selectProduct } from '../../redux/selectors';
import { useProductValue } from './useProductValue';
import { wrapper } from '../../redux/store';

interface ProductProps {
  productId: string | string[];
  product: Product;
  onCloseModal: () => void;
}

export const ProductModalView: React.FC<ProductProps> = ({
  productId,
  product,
  onCloseModal,
}) => {
  const dispatch = useDispatch();
  const stateProduct = useSelector(selectProduct);
  const defaultProduct = getDefaultProductValue(product);
  const [imageSrc, setImageSrc] = React.useState(defaultProduct.imageSrc);

  React.useEffect(() => {
    dispatch(setProduct(defaultProduct));
    () => dispatch(clearProduct());
  }, []);

  const handleChangeSize = (props: ChangeSizeProps) => {
    dispatch(changeSize(props));
    const { imageSrc } = getDefaultProductValue(
      product,
      props.sizeId,
      stateProduct.crustTypeId
    );
    setImageSrc(imageSrc);
  };

  const handleChangeCrust = (props: ChangeCrustTypeProps) => {
    dispatch(changeCrustType(props));
    const { imageSrc } = getDefaultProductValue(
      product,
      stateProduct.sizeId,
      props.crustTypeId
    );
    setImageSrc(imageSrc);
    setImageSrc(props.imageSrc);
  };

  const handleAddTopping = (props: AddProductToppingProps) => {
    dispatch(addTopping(props));
  };

  const handlePushAlert = (message: string) => {
    dispatch(pushAlert(message));
  };

  const handleAddToProduct = () => {
    dispatch(addToCart());
    dispatch(clearProduct());
    onCloseModal();
  };

  return (
    <div className={classes.product} data-testid="product-modal">
      <button className={classes.mobileButton} onClick={onCloseModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
        </svg>
      </button>
      <ProductPreview sizeId={stateProduct.sizeId} imageSrc={imageSrc} />
      <ProductAttributes
        product={product}
        stateProduct={stateProduct}
        changeSize={handleChangeSize}
        changeCrust={handleChangeCrust}
        addToProduct={handleAddTopping}
        addToCart={handleAddToProduct}
        pushAlert={handlePushAlert}
      />
    </div>
  );
};

export const ProductModal = wrapper.withRedux(ProductModalView);
