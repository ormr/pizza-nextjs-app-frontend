import React, { useMemo, createContext } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import classes from './Product.module.scss';

import {
  setProduct,
  addToCart,
  pushAlert,
  clearProduct,
} from '../../redux/actions';

import {
  GetDefaultProductValue,
  getDefaultProductValue,
} from '../../utils/getDefaultProductValue';

import { Product } from '../../types/Product.interface';
import { ProductAttributes } from './ProductAttributes';
import { ProductPreview } from './ProductPreview';
import { selectProduct } from '../../redux/selectors';
import { wrapper } from '../../redux/store';
import { ProductState } from '../../redux/reducers/productReducer';
import { ProductSwitch } from './ProductSwitch';
import { ProductTopping } from './ProductTopping';
import { ProductIngredients } from './ProductIngredients';
import { useProductAttributes } from './useProductAttributes';
import { ProductHeader } from './ProductHeader';

interface ProductProps {
  productId: string | string[];
  product: Product;
  onCloseModal: () => void;
}

interface ProductModalContextInterface {
  product: Product;
  stateProduct: ProductState;
  defaultProduct: GetDefaultProductValue;
  imageSrc: string;
}

export const ProductModalContext = createContext(
  {} as ProductModalContextInterface
);
const { Provider } = ProductModalContext;

export const ProductModalView: React.FC<ProductProps> = ({
  product,
  onCloseModal,
}) => {
  const dispatch = useDispatch();
  const stateProduct = useSelector(selectProduct);
  const defaultProduct = getDefaultProductValue(product);

  React.useEffect(() => {
    dispatch(setProduct(defaultProduct));
    () => dispatch(clearProduct());
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart());
    pushAlert(`Добавлено: ${product.name}, ${stateProduct.diameter}`);
    dispatch(clearProduct());
    onCloseModal();
  };

  const {
    sizes,
    crostTypes,
    pick,
    imageSrc,
    handleSizeChange,
    handleCrostChange,
    handleToppingToProduct,
  } = useProductAttributes(product, stateProduct);

  const memoizedValue = useMemo(
    () => ({
      product,
      stateProduct,
      defaultProduct,
      imageSrc,
    }),
    [stateProduct, imageSrc, product]
  );

  return (
    <ProductContainer providerValue={memoizedValue}>
      <ProductMobileButton handleCloseModal={onCloseModal} />
      <ProductPreview />
      <ProductAttributes handleAddToCart={handleAddToCart}>
        <ProductHeader />
        <ProductIngredients />
        <ProductSwitch
          inputName="sizes"
          items={sizes}
          pick={pick.sizePick}
          handleInputChange={handleSizeChange}
        />
        <ProductSwitch
          inputName="crost"
          items={crostTypes}
          pick={pick.crostPick}
          handleInputChange={handleCrostChange}
        />
        <ProductTopping onPickItem={handleToppingToProduct} />
      </ProductAttributes>
    </ProductContainer>
  );
};

/**
 * Subcomponents
 */

const ProductContainer = ({
  children,
  providerValue,
  className = '',
  ...restProps
}) => {
  const classNames = [classes.product, className].join(' ').trim();
  return (
    <Provider value={providerValue}>
      <div className={classNames} data-testid="product-modal" {...restProps}>
        {children}
      </div>
    </Provider>
  );
};

const ProductMobileButton = ({ handleCloseModal, ...restProps }) => {
  return (
    <button
      className={classes.mobileButton}
      onClick={handleCloseModal}
      {...restProps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
      </svg>
    </button>
  );
};

export const ProductModal = wrapper.withRedux(ProductModalView);
