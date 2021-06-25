import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from './Alert';
import classes from './Alert.module.scss';
import { Layout } from '../Layout';
import { popAlert, clearAlert } from '../../redux/actions';
import { selectAlertData } from '../../redux/selectors';
import { wrapper } from '../../redux/store';

interface AlertListProps {
  delay: number;
  positionTop: number;
  positionRight: number;
}

export const AlertsView: React.FC<AlertListProps> = ({
  delay,
  positionTop,
  positionRight,
}) => {
  React.useEffect(() => {
    dispatch(clearAlert());
  }, []);

  const dispatch = useDispatch();
  const { stack } = useSelector(selectAlertData);
  const lastProduct = stack[stack.length - 1];

  const handleOnFade = (index: string) => {
    dispatch(popAlert(index));
  };

  if (!lastProduct) return null;

  const alertListBody = stack.map(({ id, message, fade }) => {
    const randomKey = uuidv4();
    return (
      <Alert
        key={randomKey}
        index={id}
        delay={delay}
        fade={fade}
        onFade={handleOnFade}
      >
        {message}
      </Alert>
    );
  });

  return (
    <div
      className={classes.list}
      style={{
        top: `${positionTop}px`,
        right: `${positionRight}px`,
      }}
    >
      {alertListBody}
    </div>
  );
};

export const Alerts = wrapper.withRedux(AlertsView);
