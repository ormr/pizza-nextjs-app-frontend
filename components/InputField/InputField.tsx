import React from 'react';
import classes from './InputField.module.scss';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { DeepMap } from 'react-hook-form';

interface InputFieldProps {
  id: string;
  type: string;
  labelText: string;
  value?: string;
  placeHolder?: string;
  error?: DeepMap<any, any>;
  onChange: (value: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  labelText,
  placeHolder,
  error,
  onChange,
}) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleChangeNumberFormat = ({ value }: NumberFormatValues) => {
    onChange(`+${value}`); // +{phone}
  };

  const inputWrapperClassList = !error
    ? classes.inputWrapper
    : classes.inputErrorWrapper;

  const inputBody =
    type === 'phone' ? (
      <NumberFormat
        id={id}
        className={classes.input}
        format="+# (###) ###-##-##"
        mask="_"
        placeholder={placeHolder}
        data-testid="input"
        onValueChange={handleChangeNumberFormat}
      />
    ) : (
      <input
        id={id}
        className={classes.input}
        type={type}
        data-testid="input"
        onChange={handleChangeInput}
      />
    );
  return (
    <div className={classes.field}>
      <label htmlFor={id} className={classes.label}>
        {labelText}
      </label>
      <div className={inputWrapperClassList}>
        {inputBody}
        <div className={classes.error}>{!!error ? error.message : null}</div>
      </div>
    </div>
  );
};
