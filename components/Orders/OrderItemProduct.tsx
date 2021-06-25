import React from 'react';
import Image from 'next/image';
import classes from './OrderItemProduct.module.scss';
import { Cart } from '../../redux/reducers/cartReducer';

interface OrderItemProductProps extends Cart {}

export const OrderItemProduct: React.FC<OrderItemProductProps> = (product) => {
  const {
    name,
    sizeName,
    diameter,
    crustTypeName,
    imageSrc,
    topping,
    price,
    count,
  } = product;
  const listOfToppings = topping.map(({ name }) => name).join(', ');

  return (
    <div className={classes.item}>
      <div className={classes.image}>
        <Image src={imageSrc} height={60} width={60}></Image>
      </div>
      <div className={classes.about}>
        <div className={classes.name}>{name}</div>
        <div className={classes.description}>
          {sizeName} {diameter}, {crustTypeName} тесто
          <div>{listOfToppings}</div>
        </div>
      </div>
      <div className={classes.price}>
        {price * count}
        <span> &#8381;</span>
      </div>
    </div>
  );
};
