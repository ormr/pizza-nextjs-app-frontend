import React from 'react';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { SignupForm } from '../components/auth/SignupForm';
import { ConfirmPhone } from '../components/auth/ConfirmPhone';
import { Alerts } from '../components/Alerts';
import { checkAuth } from '../utils/checkAuth';
import { UserData } from './index';

const authComponents = {
  0: SignupForm,
  1: ConfirmPhone,
};

type AuthContextProps = {
  onNextStep: () => void;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  setFieldValue: (field: keyof UserData, value: string) => void;
  step: number;
  userData?: UserData;
};

export const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps
);

const SignUp: React.FC = () => {
  const [step, setStep] = React.useState<number>(0);
  const [userData, setUserData] = React.useState<UserData>();
  const Step = authComponents[step];

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const setFieldValue = (field: string, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <Header />
      <Layout size="small">
        <Alerts delay={10000} positionTop={30} positionRight={30} />
        <AuthContext.Provider
          value={{ step, onNextStep, userData, setUserData, setFieldValue }}
        >
          <Step />
        </AuthContext.Provider>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  try {
    const user = await checkAuth(ctx);

    if (user) {
      return {
        props: {},
        redirect: {
          destination: `/profile/${user._id}`,
          permanent: false,
        },
      };
    }
  } catch (err) {
    return { props: {} };
  }
  return { props: {} };
};

export default SignUp;
