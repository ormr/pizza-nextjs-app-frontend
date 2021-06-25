import React from 'react';
import { Order } from '../../types/Order.interface';
import { OrderItem } from './OrderItem';
import classes from './Orders.module.scss';

export interface OrdersProps {
  items: Order[];
}

export const Orders: React.FC<OrdersProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <OrderItem key={item._id} {...item} />
      ))}
    </div>
  );
};
