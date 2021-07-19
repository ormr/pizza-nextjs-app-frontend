import React from 'react';
import { Button } from '../Button';
import classes from './Card.module.scss';
import { useCardContext } from './useCardContext';

export interface CardInfoProps {
  title: string;
  ingredients: string[];
  price: number;
  description?: string;
  buttonText?: string;
}

export const CardInfo: React.FC<CardInfoProps> = ({
  title,
  ingredients,
  price,
  description = '',
  buttonText = 'Выбрать',
}) => {
  const { handleClick } = useCardContext();

  const strIngredients = ingredients.join(', ');
  const body = ingredients
    ? strIngredients.charAt(0).toUpperCase() + strIngredients.slice(1)
    : description;

  return (
    <div className={classes.info}>
      <div className={classes.description}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{body}</p>
      </div>
      <footer className={classes.footer}>
        <div className={classes.price}>от {price} ₽</div>
        <a onClick={handleClick}>
          <Button type="secondary" size="medium">
            {buttonText}
          </Button>
        </a>
      </footer>
    </div>
  );
};
