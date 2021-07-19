import { useContext } from "react";
import { CardContext } from './Card';

export const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error(
      `Product compound components cannot be rendered outside the Toggle component`
    );
  }
  return context;
};