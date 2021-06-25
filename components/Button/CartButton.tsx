import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import classes from './CartButton.module.scss';
import { RootState } from '../../redux/types';

interface CartButtonProps {
  productCount: number;
}

export const CartButton: React.FC<CartButtonProps> = ({ productCount }) => {
  return (
    <Link href="/cart">
      <a className={classes.item}>
        <div className={classes.name}>Корзина</div>
        <div className={classes.side}>
          <div className={classes.count}>{productCount}</div>
          <div className={classes.icon}>
            <svg width="13" height="11" fill="none" className={classes.svg}>
              <path
                d="M1 5.483h11m0 0L7.286 1M12 5.483L7.286 10"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </a>
    </Link>
  );
};
