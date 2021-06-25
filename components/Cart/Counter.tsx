import React from 'react';

import classes from './Counter.module.scss';

interface CounterProps {
  currentCount: number;
  onUpdate: (item: number) => void;
  onDelete: () => void;
}

export const Counter: React.FC<CounterProps> = ({
  currentCount,
  onUpdate,
  onDelete,
}) => {
  const [count, setCount] = React.useState<number>(currentCount);

  React.useEffect(() => onUpdate(count), [count]);

  const decrease = () => {
    if (count - 1 < 1) {
      onDelete();
    } else {
      setCount(count - 1);
    }
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className={classes.item}>
      <button onClick={decrease} className={classes.button}>
        <span>-</span>
      </button>
      <div className={classes.count}>{count}</div>
      <button onClick={increase} className={classes.button}>
        <span>+</span>
      </button>
    </div>
  );
};
