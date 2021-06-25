import React from 'react';
import Cookies from 'js-cookie';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import classes from './SignupForm.module.scss';
import { useDispatch } from 'react-redux';
import { InputField } from '../InputField';
import { Button } from '../Button';
import { Axios } from '../../core/axios';
import { Api } from '../../api';
import { AuthContext } from '../../pages/signup';
import NumberFormat, { NumberFormatValues } from 'react-number-format';

export interface SignupFormProps {
  name: string;
  surname: string;
  address: string;
  phone: string;
  password: string;
  password2: string;
}

const getRandomNumber = () => {
  let number = '';

  for (let i = 0; i < 9; i++) {
    number += Math.floor(Math.random() * 10);
  }

  return `+79${number}`;
};

const SignupFormSchema = yup.object().shape({
  name: yup.string().required('Введите Ваше имя'),
  surname: yup.string().required('Введите Вашу фамилию'),
  address: yup.string().required('Введите Ваш адрес'),
  phone: yup.string().required('Укажите номер телефона'),
  password: yup
    .string()
    .min(6, '​Минимальная длина пароля 6 символов')
    .required('​Введите пароль'),
  password2: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не соответствуют'),
});

export const SignupForm = () => {
  const { onNextStep, setUserData } = React.useContext(AuthContext);
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormProps>({
    resolver: yupResolver(SignupFormSchema),
  });

  const onSubmit = async (data: SignupFormProps) => {
    try {
      const res = await Api(Axios).register(data);

      const { user, token } = res.data;

      Cookies.remove('token');
      setUserData(user);
      Cookies.set('token', token);
      await Api(Axios).sendSMS(user.phone);
      onNextStep();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h2 className="text-align-center">Регистрация</h2>
      <p className="text-align-center">
        Пройдите регистрацию, чтобы полноценно пользоваться сервисом
      </p>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <InputField
              id={field.name}
              type={field.name}
              error={errors.name}
              labelText="Имя"
              onChange={(name) => field.onChange(name)}
            />
          )}
          name="name"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <InputField
              id={field.name}
              type={field.name}
              error={errors.surname}
              labelText="Фамилия"
              onChange={(surname) => field.onChange(surname)}
            />
          )}
          name="surname"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <InputField
              id={field.name}
              type={field.name}
              error={errors.address}
              labelText="Адрес"
              onChange={(address) => field.onChange(address)}
            />
          )}
          name="address"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <InputField
              id={field.name}
              type={field.name}
              error={errors.phone}
              labelText="Номер телефона"
              placeHolder="+7 (980) 650-53-20"
              onChange={(phone) => field.onChange(phone)}
            />
          )}
          name="phone"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <InputField
              id={field.name}
              type={field.name}
              error={errors.password}
              labelText="Пароль"
              onChange={(password) => field.onChange(password)}
            />
          )}
          name="password"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <InputField
              id={field.name}
              type="password"
              error={errors.password2}
              labelText="Повторите пароль"
              onChange={(password2) => field.onChange(password2)}
            />
          )}
          name="password2"
          control={control}
        />
        <p className="text-align-center">
          Уже есть аккаунт? <Link href="/login">Войти</Link>
        </p>
        <div className="text-align-center">
          <Button type="primary" size="big">
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </>
  );
};
