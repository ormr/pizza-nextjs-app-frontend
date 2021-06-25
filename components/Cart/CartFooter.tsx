import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Button } from '../Button';
import { selectCartProducts } from '../../redux/selectors';
import { Cart } from '../../redux/reducers/cartReducer';
import classes from './CartFooter.module.scss';

export interface OrderCart {
  list: Cart[];
  price: number;
}

interface CartFooterProps {
  onSubmit: (props: OrderCart) => void;
}

export const CartFooter: React.FC<CartFooterProps> = ({ onSubmit }) => {
  const products = useSelector(selectCartProducts);
  const price = products.reduce((sum, cur) => sum + cur.price * cur.count, 0);

  const handleSubmit = async () => {
    onSubmit({ list: products, price });
  };

  return (
    <div className={classes.footer}>
      <section className={classes.sum}>
        <div className={classes.description}>
          <div>Сумма заказа: </div>
          <div className={classes.price}>
            {price}
            <span> ₽</span>
          </div>
        </div>
      </section>
      <section className={classes.links}>
        <Link href="/">
          <a>
            <Button type="tertiary" size="big">
              Вернуться в меню
            </Button>
          </a>
        </Link>
        <Button type="tertiary" size="big" onClick={handleSubmit}>
          Оформить заказ
        </Button>
      </section>
    </div>
  );
};
