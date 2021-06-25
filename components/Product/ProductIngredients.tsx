import React from 'react';
import classes from './ProductIngredients.module.scss';

interface ProductIngredientsProps {
  ingredients: {
    name: string;
    canBeRemoved: boolean;
    isRemoved: boolean;
  }[];
}

export const ProductIngredients: React.FC<ProductIngredientsProps> = ({
  ingredients,
}) => {
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
