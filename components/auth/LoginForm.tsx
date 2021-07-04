import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Spinner } from '../Spinner';
import { InputField } from '../InputField';
import { Button } from '../Button';

import { Api } from '../../api';
import { setUserData } from '../../redux/actions/userActions';
import { Axios } from '../../core/axios';
import { pushAlert } from '../../redux/actions';

export interface LoginFormSchemaProps {
  phone: string;
  password: string;
}

const LoginFormSchema = yup.object().shape({
  phone: yup
    .string()
    .min(11, 'Номер введен не полностью')
    .required('Укажите номер телефона'),
  password: yup
    .string()
    .min(6, 'Минимальная длина пароля 6 символов')
    .required(),
});

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

  const handleLoading = (loadingStatus: boolean) => {
    setLoading(loadingStatus);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchemaProps>({
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (data: LoginFormSchemaProps) => {
    try {
      const { phone, password } = data;
      handleLoading(true);
      const res = await Api(Axios).logIn({
        phone,
        password,
      });

      if (res.status === 200) {
        const { token, user } = res.data;
        Cookies.remove('token');
        Cookies.set('token', token);
        dispatch(setUserData(user));
        router.push(`/profile/${user._id}`);
      } else {
        handleLoading(false);
        dispatch(pushAlert(`Ошибка ${res.status}: ${res.errorMessage}`));
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 className="text-align-center">Вход</h2>
      <p className="text-align-center">
        Войдите в аккаунт, чтобы полноценно пользоваться сервисом
      </p>
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
      <p className="text-align-center">
        Нет аккаунта? <Link href="/signup">Зарегистрируйтесь</Link>
      </p>
      <div className="text-align-center">
        <Button type="primary" size="big">
          Войти
        </Button>
      </div>
    </form>
  );
};
