import React from 'react';

import classes from './ProductSwitch.module.scss';

interface ProductSwitchItem {
  id: string;
  name: string;
  isDisabled?: boolean;
}

interface ProductModalSwitchProps {
  inputName: string;
  items: ProductSwitchItem[];
  pick: number;
  handleInputChange: (item: ProductSwitchItem, index: number) => void;
}

export const ProductSwitch: React.FC<ProductModalSwitchProps> = ({
  inputName,
  items,
  pick,
  handleInputChange,
}) => {
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.focus}
        style={{
          width: `${100 / items.length}%`,
          transform: `translateX(${100 * pick}%)`,
        }}
      ></div>
      {items.map(({ id, name, isDisabled }, index) => {
        return (
          <React.Fragment key={index}>
            <input
              id={id}
              className={classes.input}
              name={inputName}
              type="radio"
              value={pick}
              onClick={() => handleInputChange({ id, name, isDisabled }, index)}
              disabled={isDisabled}
            />
            <label
              style={{ flexBasis: `${100 / items.length}%` }}
              className={classes.label}
              htmlFor={id}
            >
              {name}
            </label>
          </React.Fragment>
        );
      })}
    </div>
  );
};
