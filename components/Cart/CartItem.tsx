import React from 'react';
import Image from 'next/image';

import { Counter } from './Counter';
import classes from './CartItem.module.scss';
import { Cart } from '../../redux/reducers/cartReducer';

interface CartItemProps {
  product: Cart;
  onUpdateItem: (id: string, count: number) => void;
  onDeleteItem: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  product,
  onUpdateItem,
  onDeleteItem,
}) => {
  const {
    id,
    name,
    sizeName,
    crustTypeName,
    diameter,
    imageSrc,
    count,
    price,
    topping,
  } = product;

  const listOfToppings = topping.length
    ? `+ ${topping.map(({ name }) => name.toLowerCase()).join(', ')}`
    : null;

  return (
    <div className={classes.item}>
      <Image
        src={imageSrc}
        className={classes.image}
        height={60}
        width={60}
      ></Image>
      <div className={classes.about}>
        <h4 className={classes.name}>{name}</h4>
        <div className={classes.description}>
          <div>
            {sizeName} {diameter}, {crustTypeName} тесто
          </div>
          <div>{listOfToppings}</div>
        </div>
      </div>
      <div className={classes.counter}>
        <Counter
          currentCount={count}
          onUpdate={(count) => onUpdateItem(id, count)}
          onDelete={() => onDeleteItem(id)}
        />
      </div>
      <div className={classes.price}>
        {price * count}
        <span> &#8381;</span>
      </div>
      <button className={classes.button} onClick={() => onDeleteItem(id)}>
        <Image src="/garbage.svg" width={20} height={20} objectFit="contain" />
      </button>
    </div>
  );
};
