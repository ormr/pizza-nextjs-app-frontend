import React from 'react';
import { useRouter } from 'next/router';
import { checkAuth } from '../../utils/checkAuth';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/actions';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { Profile } from '../../components/Profile';
import { Orders } from '../../components/Orders';
import { Api } from '../../api';
import { Order } from '../../types/Order.interface';
import { UserData } from '../index';

interface ProfilePageProps {
  orders: Order[];
  user: UserData;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ orders, user }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  React.useEffect(() => {
    if (router.query.id !== user._id) {
      router.push('/login');
    }
  }, []);

  React.useEffect(() => {
    dispatch(setUserData(user));
  }, [user]);

  const { name, surname, phone, address } = user;
  return (
    <>
      <Header />
      <Layout>
        <Profile
          name={name}
          surname={surname}
          phone={phone}
          address={address}
        />
        <h1 className="text-align-center">Ваши заказы</h1>
        {!orders.length ? (
          <p className="text-align-center">Пока здесь пусто</p>
        ) : (
          <Orders items={orders} />
        )}
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  try {
    const user = await checkAuth(ctx);

    if (user) {
      const orders = await Api(ctx).getOrders();

      return {
        props: {
          orders,
          user,
        },
      };
    } else {
      return {
        props: {},
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  } catch (error) {}

  return { props: {} };
};

export default ProfilePage;
