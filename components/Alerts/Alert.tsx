import React from 'react';
import classes from './Alert.module.scss';

interface AlertProps {
  children: React.ReactChild | React.ReactChild[];
  index: string;
  delay: number;
  fade: boolean;
  onFade: (index: string) => void;
}

export const Alert: React.FC<AlertProps> = ({
  children,
  index,
  delay,
  fade,
  onFade,
}) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFade(index);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return visible && !fade ? (
    <div className={classes.item}>{children}</div>
  ) : null;
};
