import React from 'react';
import classes from './Spinner.module.scss';

export const Spinner: React.FC = () => {
  return (
    <div className={classes.loader}>
      <span>Loading...</span>
    </div>
  );
};
