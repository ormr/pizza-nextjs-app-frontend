import React from 'react';
import clsx from 'clsx';
import classes from './Nav.module.scss';
import { Layout } from '../Layout';
import { CartButton } from '../Button/CartButton';
import { Alerts } from '../Alerts';

interface NavProps {
  productCount?: number;
}

export const Nav: React.FC<NavProps> = ({ productCount = 0 }) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={classes.wrapper}>
      <Layout>
        <div className={classes.body}>
          <div className={classes.icon}>
            <img
              src="/logo.svg"
              className={clsx(classes.item, scrolled ? classes.scrolled : '')}
              alt="logo"
            />
          </div>
          <div className={classes.cart}>
            <CartButton productCount={productCount} />
          </div>
          <Alerts delay={100000} positionTop={55} positionRight={0} />
        </div>
      </Layout>
    </nav>
  );
};
