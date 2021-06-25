import React from 'react';
import classes from './Grid.module.scss';
import { Card } from '../Card';

import { Product } from '../../types/Product.interface';
import { getDefaultProductValue } from '../../utils/getDefaultProductValue';

interface GridProps {
  products: Product[];
}

export const Grid: React.FC<GridProps> = ({ products }) => {
  const gridBody = products.map((product: Product) => {
    const { id, name, imageSrc } = getDefaultProductValue(product);
    const { sizes, ingredients } = product;
    const { price } = sizes.find(({ sizeId }) => sizeId === 'small');
    const ingredientsNames = ingredients.map(({ name }) => name);

    return (
      <Card
        key={id}
        id={id}
        imageSrc={imageSrc}
        title={name}
        ingredients={ingredientsNames}
        price={price}
        buttonText="Выбрать"
      />
    );
  });

  return <div className={classes.pizzas}>{gridBody}</div>;
};
