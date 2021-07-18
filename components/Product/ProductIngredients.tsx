import React from 'react';
import { useContext } from 'react';
import { ProductModalContext } from './Product';
import classes from './ProductIngredients.module.scss';

export const ProductIngredients: React.FC = () => {
  const { product } = useContext(ProductModalContext);
  const { ingredients } = product;

  const firstIngredient = ingredients[0].name;
  const otherIngredients = ingredients
    .slice(1)
    .map(({ name }) => name)
    .join(', ');
  const firstElement =
    firstIngredient.slice(0, 1).toUpperCase() + firstIngredient.slice(1);

  return (
    <div className={classes.ingredients}>
      {firstElement}, {otherIngredients}
    </div>
  );
};
