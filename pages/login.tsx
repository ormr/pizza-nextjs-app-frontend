import React from 'react';
import Link from 'next/link';
import { Api } from '../api';

import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { LoginForm } from '../components/auth/LoginForm';
import { Alerts } from '../components/Alerts';

const LogIn: React.FC = () => {
  return (
    <>
      <Header />
      <Alerts delay={10000} positionTop={30} positionRight={30} />
      <Layout size="small">
        <LoginForm />
      </Layout>
    </>
  );
};

export default LogIn;
