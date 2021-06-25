import React from 'react';
import Head from 'next/head';
import Modal from 'react-modal';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Api } from '../api';

import { Product } from '../types/Product.interface';
import { Alerts } from '../components/Alerts';
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { Layout } from '../components/Layout';
import { ProductModal } from '../components/Product';
import { Grid } from '../components/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from '../redux/selectors';
import { setUserData } from '../redux/actions';
import { fetchUser } from '../utils/fetchUser';
import { RootState } from '../redux/types';

export type UserData = {
  _id: string;
  name: string;
  surname: string;
  address: string;
  phone: string;
  activated: boolean;
  token?: string;
};

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#__next');

interface Props {
  products: Product[];
}

const Home: React.FC<Props> = ({ products }) => {
  const userData = useSelector(selectUserData);
  const productCount = useSelector((state: RootState) => state.cart).products
    .length;
  const dispatch = useDispatch();
  const router = useRouter();

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [productModal, setProductModal] = React.useState<any>({});

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    router.push('/');
  };

  const getUser = async () => {
    if (!userData._id) {
      const data = await fetchUser();
      return data ? dispatch(setUserData(data)) : null;
    }
  };

  React.useEffect(() => {
    getUser();
    if (router.query.productId) {
      openModal();
      const product = products.find(
        (product) => product.id === router.query.productId
      );
      setProductModal(product);
    }
  }, [router.query.productId]);

  if (!products) {
    return;
  }

  return (
    <>
      <Head>
        <title>Додо Пицца</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal
        isOpen={modalIsOpen}
        preventScroll={true}
        onRequestClose={closeModal}
        contentLabel="Post modal"
      >
        <ProductModal
          productId={router.query.productId}
          product={productModal}
          onCloseModal={closeModal}
        />
      </Modal>
      <Header loginButton={true} />
      <Nav productCount={productCount} />
      <Layout>
        {products.length ? (
          <Grid products={products} />
        ) : (
          <h2>Что-то пошло не так. Попробуйте позже</h2>
        )}
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const products = await Api(ctx).getProducts();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
      },
    };
  }
};

export default Home;
