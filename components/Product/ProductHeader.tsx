import classes from './ProductHeader.module.scss';
import { GetDefaultProductValue } from '../../utils/getDefaultProductValue';
import { useContext } from 'react';
import { ProductModalContext } from './Product';

export const ProductHeader: React.FC = () => {
  const { defaultProduct } = useContext(ProductModalContext);
  const { name, diameter, crustTypeName, weight } = defaultProduct;

  return (
    <div className={classes.header}>
      <div className={classes.title}>{name}</div>
      <div className={classes.about}>
        {`${diameter} см, ${crustTypeName} тесто, ${weight} г.`}
      </div>
    </div>
  );
};
