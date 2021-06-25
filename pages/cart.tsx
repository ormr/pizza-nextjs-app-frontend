import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Axios } from '../core/axios';
import { checkAuth } from '../utils/checkAuth';
import { Api } from '../api';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { CartList } from '../components/Cart';
import { CartFooter, OrderCart } from '../components/Cart/CartFooter';
import { UserData } from './index';
import { useDispatch } from 'react-redux';
import { clearCart, pushAlert } from '../redux/actions';
import { Alerts } from '../components/Alerts';

interface CartPageProps {
  user: UserData;
}

const Cart: React.FC<CartPageProps> = ({ user }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleCartSubmit = async ({ list, price }: OrderCart) => {
    if (!list.length) {
      return dispatch(pushAlert('Корзина пуста'));
    }

    try {
      const orderData = {
        list,
        price,
      };

      if (!user) {
        router.push('/login');
      }

      await Api(Axios).createOrder(orderData);
      dispatch(pushAlert(`Заказ принят в обработку`));
      dispatch(clearCart());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Корзина</title>
      </Head>
      <Header />
      <Alerts delay={10000} positionTop={30} positionRight={30} />
      <Layout size="small">
        <h1>Корзина</h1>
        <CartList />
        <CartFooter onSubmit={(props) => handleCartSubmit(props)} />
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const user = await checkAuth(ctx);
  return { props: { user } };
};

export default Cart;
