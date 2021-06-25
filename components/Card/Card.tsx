import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../Button';

import classes from './Card.module.scss';

interface Props {
  id: string;
  imageSrc: string;
  title: string;
  ingredients: string[];
  description?: string;
  price: number;
  buttonText: string;
}

export const Card: React.FC<Props> = ({
  id,
  imageSrc,
  title,
  ingredients,
  description,
  price,
  buttonText,
}) => {
  const router = useRouter();

  const handleButtonSubmit = () => {
    router.push(`/?productId=${id}`);
  };

  const strIngredients = ingredients.join(', ');
  const cardBody = ingredients
    ? strIngredients.charAt(0).toUpperCase() + strIngredients.slice(1)
    : description;

  return (
    <div className={classes.item}>
      <figure className={classes.figure} onClick={handleButtonSubmit}>
        <Image
          className={classes.image}
          width={292}
          height={292}
          src={imageSrc}
          alt={title}
        />
      </figure>
      <div className={classes.info}>
        <div className={classes.description}>
          <h3 className={classes.title}>{title}</h3>
          <p className={classes.description}>{cardBody}</p>
        </div>
        <footer className={classes.footer}>
          <div className={classes.price}>от {price} ₽</div>
          <a onClick={handleButtonSubmit}>
            <Button type="secondary" size="medium">
              {buttonText}
            </Button>
          </a>
        </footer>
      </div>
    </div>
  );
};
