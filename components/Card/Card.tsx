import React, { createContext } from 'react';
import classes from './Card.module.scss';

import { CardImage, CardImageProps } from './CardImage';
import { CardInfo, CardInfoProps } from './CardInfo';

interface Props {
  handleClick: () => void;
  children: React.ReactElement[];
}

interface TabsComposition {
  Image: React.FC<CardImageProps>;
  Info: React.FC<CardInfoProps>;
}

interface CardContextProps {
  handleClick: () => void;
}

export const CardContext = createContext({} as CardContextProps);

const Card: React.FC<Props> & TabsComposition = ({ handleClick, children }) => {
  return (
    <CardContext.Provider value={{ handleClick }}>
      <div className={classes.item}>{children}</div>
    </CardContext.Provider>
  );
};

Card.Image = CardImage;
Card.Info = CardInfo;

export { Card };
