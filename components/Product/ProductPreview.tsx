import React from 'react';
import Image from 'next/image';
import classes from './ProductPreview.module.scss';

interface ProductImageProps {
  sizeId: string;
  imageSrc: string;
}

export const ProductPreview: React.FC<ProductImageProps> = ({
  sizeId,
  imageSrc,
}) => {
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
