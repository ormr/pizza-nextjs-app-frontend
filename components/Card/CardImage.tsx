import React from 'react';
import Image from 'next/image';
import classes from './Card.module.scss';
import { useCardContext } from './useCardContext';

export interface CardImageProps {
  src: string;
  alt: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt }) => {
  const { handleClick } = useCardContext();

  return (
    <figure className={classes.figure} onClick={handleClick}>
      <Image
        className={classes.image}
        width={292}
        height={292}
        src={src}
        alt={alt}
      />
    </figure>
  );
};
