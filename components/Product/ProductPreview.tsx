import React, { useContext } from 'react';
import Image from 'next/image';
import classes from './ProductPreview.module.scss';
import { ProductModalContext } from './Product';
import { useProductModalContext } from './useProductModalContext';

export const ProductPreview: React.FC = () => {
  const { stateProduct, imageSrc } = useProductModalContext();
  const { sizeId } = stateProduct;

  const scales = {
    small: 0.8,
    medium: 0.9,
    big: 1,
  };

  return (
    <div
      className={classes.preview}
      style={{
        transform: `scale(${scales[sizeId]})`,
        transition: '0.3s',
      }}
    >
      <Image
        src={imageSrc}
        className={classes.image}
        height={400}
        width={400}
      ></Image>
    </div>
  );
};
