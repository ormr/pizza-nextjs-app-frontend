import { useContext } from 'react';
import { ProductModalContext } from './Product';

export const useProductModalContext = () => {
  const context = useContext(ProductModalContext);

  if (!context) {
    throw new Error(
      `Product compound components cannot be rendered outside the Toggle component`
    );
  }
  return context;
};