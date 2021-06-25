import React, { ReactChild } from 'react';
import classes from './Layout.module.scss';

type LayoutSizes = 'normal' | 'small';

interface Props {
  children: ReactChild | ReactChild[];
  size?: LayoutSizes;
}

export const Layout: React.FC<Props> = ({ children, size = 'normal' }) => {
  const classList = size === 'normal' ? classes.grid : classes.gridSmall;

  return <div className={classList}>{children}</div>;
};
