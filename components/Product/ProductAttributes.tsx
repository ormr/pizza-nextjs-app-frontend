import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Button } from '../Button';
import { ProductModalContext } from './Product';
import classes from './ProductAttributes.module.scss';
import { useProductModalContext } from './useProductModalContext';

interface ProductAttributesProps {
  handleAddToCart: () => void;
}

export const ProductAttributes: React.FC<ProductAttributesProps> = ({
  children,
  handleAddToCart,
}) => {
  const { stateProduct } = useProductModalContext();
  const { price } = stateProduct;

  return (
    <div className={classes.side}>
      <ProductInfoContainer>{children}</ProductInfoContainer>
      <div className={classes.addToCart}>
        <Button type="primary" size="big" onClick={handleAddToCart}>
          Добавить в корзину за {price} <span>₽</span>
        </Button>
      </div>
    </div>
  );
};

const ProductInfoContainer: React.FC = ({ children }) => {
  return (
    <Scrollbars className={classes.scrollbar} autoHide hideTracksWhenNotNeeded>
      <div className={classes.info}>{children}</div>
    </Scrollbars>
  );
};
