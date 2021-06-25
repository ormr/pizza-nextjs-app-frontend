import { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';
import { wrapper, StoreWithPersistor } from '../redux/store';

import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  const store = useStore() as StoreWithPersistor;

  return (
    <PersistGate persistor={store.__persistor} loading={null}>
      <Component {...pageProps} />
    </PersistGate>
  );
};

export default wrapper.withRedux(App);
