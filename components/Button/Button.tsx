import React, { ReactChild } from 'react';
import { Spinner } from '../Spinner';

import classes from './Button.module.scss';

type buttonSizes = 'big' | 'medium' | 'small';
type buttonTypes = 'primary' | 'secondary' | 'tertiary';

interface Props {
  children: ReactChild | ReactChild[];
  type: buttonTypes;
  size: buttonSizes;
  async?: boolean;
  isLoad?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ children, size, type, onClick }) => {
  return (
    <button
      className={classes.item}
      data-size={size}
      data-type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
