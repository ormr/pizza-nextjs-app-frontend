import React from 'react';
import classes from './Profile.module.scss';

export interface ProfileProps {
  name: string;
  surname: string;
  phone: string;
  address: string;
}

export const Profile: React.FC<ProfileProps> = ({
  name,
  surname,
  phone,
  address,
}) => {
  return (
    <div className={classes.item}>
      <ul className={classes.list}>
        <li className={classes.name}>
          {name} {surname}
        </li>
        <li className={classes.phone}>{phone}</li>
        <li className={classes.address}>{address}</li>
      </ul>
    </div>
  );
};
