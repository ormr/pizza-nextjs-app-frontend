import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { selectUserData } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { Layout } from '../Layout';
import { HeaderAbout } from './HeaderAbout';
import { ProfileButton } from './ProfileButton';
import classes from './Header.module.scss';

export interface HeaderProps {
  loginButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ loginButton = false }) => {
  const userData = useSelector(selectUserData);

  return (
    <header className={classes.wrapper}>
      <Layout>
        <div className={classes.inner}>
          <div className={classes.info}>
            <Link href="/">
              <a className={classes.logo}>
                <Image
                  src="/logo.svg"
                  width={45}
                  height={40}
                  objectFit="contain"
                />
                <div className={classes.text}>
                  <span className={classes.selectedText}>Pereslavl</span>Pizza
                </div>
              </a>
            </Link>
            <div className={classes.contacts}>
              <HeaderAbout
                city="Переславль"
                time={37}
                rating={4.73}
                reviewsCount={417}
              />
              <div className={classes.phone}>
                <a href="tel:+71111111111">8 111 111-11-11</a>
                <div className={classes.description}>звонок платный</div>
              </div>
            </div>
          </div>
          <ProfileButton disabled={loginButton} userId={userData._id} />
        </div>
      </Layout>
    </header>
  );
};
