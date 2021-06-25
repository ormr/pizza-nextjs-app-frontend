import React from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { updateProductCount, deleteCartProduct } from '../../redux/actions';
import { CartState } from '../../redux/reducers/cartReducer';
import { CartItem } from './CartItem';
import classes from './CartList.module.scss';
import { selectCartProducts } from '../../redux/selectors';

export const CartList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectCartProducts);

  const handleUpdateItem = (id: string, count: number) => {
    dispatch(updateProductCount({ id, count }));
  };

  const handleDeleteItem = (id: string) => {
    dispatch(deleteCartProduct({ id }));
  };

  if (!products.length) {
    return <h2 className={classes.info}>Добавьте что-нибудь из продуктов</h2>;
  }

  return (
    <div className={classes.list}>
      {products.map((product) => {
        return (
          <CartItem
            key={product.id}
            product={product}
            onUpdateItem={handleUpdateItem}
            onDeleteItem={handleDeleteItem}
          />
        );
      })}
    </div>
  );
};
