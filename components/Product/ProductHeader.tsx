import classes from './ProductHeader.module.scss';
import { useProductModalContext } from './useProductModalContext';

export const ProductHeader: React.FC = () => {
  const { defaultProduct } = useProductModalContext();
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
