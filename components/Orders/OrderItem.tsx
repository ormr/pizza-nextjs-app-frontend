import React from 'react';
import classes from './OrderItem.module.scss';
import { OrderItemProduct } from './OrderItemProduct';

export interface OrderItemProps {}

const transformStatus = {
  RECEIVE: 'Принят',
  MAKING: 'В процессе изготовления',
  DELIVERY: 'Доставляется',
  COMPLETE: 'Выполнен',
  CANCELED: 'Отменен',
};

export const OrderItem = ({ time, status, list, price }) => {
  const formattedTime = new Date(time).toLocaleString('ru-RU');

  const listBody = list.map((product) => (
    <OrderItemProduct key={product.id} {...product} />
  ));

  return (
    <div className={classes.item}>
      <div className={classes.header}>Заказ от {formattedTime}</div>
      <div className={classes.status}>
        Статус: {transformStatus[`${status}`]}
      </div>
      <div className={classes.listTitle}>Состав:</div>
      <div>{listBody}</div>
      <div className={classes.price}>
        Цена: {price}
        <span>₽</span>
      </div>
    </div>
  );
};
