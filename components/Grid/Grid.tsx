import React from 'react';
import classes from './Grid.module.scss';
import { Card } from '../Card';

import { Product } from '../../types/Product.interface';
import { getDefaultProductValue } from '../../utils/getDefaultProductValue';
import { useRouter } from 'next/router';

interface GridProps {
  products: Product[];
}

export const Grid: React.FC<GridProps> = ({ products }) => {
  const gridBody = products.map((product: Product) => {
    const { id, name, imageSrc } = getDefaultProductValue(product);
    const { sizes, ingredients } = product;
    const { price } = sizes.find(({ sizeId }) => sizeId === 'small');
    const ingredientsNames = ingredients.map(({ name }) => name);

    const router = useRouter();

    const handleButtonSubmit = () => {
      router.push(`/?productId=${id}`);
    };

    return (
      <Card handleClick={handleButtonSubmit}>
        <Card.Image src={imageSrc} alt={name} />
        <Card.Info title={name} ingredients={ingredientsNames} price={price} />
      </Card>
    );
  });

  return <div className={classes.pizzas}>{gridBody}</div>;
};
