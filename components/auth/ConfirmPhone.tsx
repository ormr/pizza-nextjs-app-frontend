import classes from './ConfirmPhone.module.scss';
import { useRouter } from 'next/router';
import React from 'react';
import { Axios } from '../../core/axios';
import { AuthContext } from '../../pages/signup';
import { Spinner } from '../Spinner';
import { Api } from '../../api';

export const ConfirmPhone: React.FC = () => {
  const router = useRouter();
  const { userData } = React.useContext(AuthContext);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [codes, setCodes] = React.useState<string[]>(['', '', '', '']);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = +event.target.getAttribute('id');
    const value = event.target.value;

    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });

    if (event.target.nextSibling) {
      (event.target.nextSibling as HTMLInputElement).focus();
    } else {
      onSubmit([...codes, value].join(''));
    }
  };

  const onSubmit = async (code: string) => {
    try {
      setIsLoading(true);
      await Api(Axios).activate(code);
      router.push('/login');
    } catch (error) {
      setCodes(['', '', '', '']);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={classes.confirmPhone}>
      <h1>Подтвердите ваш номер телефона</h1>
      <div className={classes.codeInput}>
        {codes.map((code, index) => (
          <input
            key={index}
            id={String(index)}
            type="tel"
            placeholder="X"
            maxLength={1}
            onChange={handleChangeInput}
            value={code}
          />
        ))}
      </div>
    </div>
  );
};
