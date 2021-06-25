import React from 'react';
import Image from 'next/image';

import classes from './ProductTopping.module.scss';

interface Props {
  sizeId: string;
  crustTypeId: string;
  items: {
    name: string;
    imageSrc: string;
    prices: {
      sizeId: string;
      price: number;
    }[];
    isDisabledFor: {
      sizes: string[];
      crustType: string[];
    };
  }[];
  onPickItem: (name: string, price: number) => void;
}

export const ProductTopping: React.FC<Props> = ({
  sizeId,
  crustTypeId,
  items,
  onPickItem,
}) => {
  return (
    <div className={classes.topping}>
      <div className={classes.toppingTitle}>Добавить в пиццу</div>
      <div className={classes.items}>
        {items.map(({ imageSrc, name, prices, isDisabledFor }, index) => {
          const currentPrice = prices.find((item) => item.sizeId === sizeId);

          const isDisabled =
            isDisabledFor.sizes.includes(sizeId) ||
            isDisabledFor.crustType.includes(crustTypeId);

          const [isPicked, setIsPicked] = React.useState(false);

          if (isDisabled && isPicked) {
            setIsPicked(false);
          }

          const handlePickItem = () => {
            onPickItem(name, currentPrice.price);
            setIsPicked(!isPicked);
          };

          return (
            <button
              key={index}
              data-selected={isPicked}
              className={classes.item}
              onClick={handlePickItem}
              disabled={isDisabled}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                className={classes.selectedIcon}
              >
                <circle cx="10" cy="10" r="10" fill="#fff"></circle>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 3.25c3.74 0 6.75 3.01 6.75 6.75s-3.01 6.75-6.75 6.75S3.25 13.74 3.25 10 6.26 3.25 10 3.25zM18.25 10c0-4.57-3.68-8.25-8.25-8.25S1.75 5.43 1.75 10s3.68 8.25 8.25 8.25 8.25-3.68 8.25-8.25z"
                  fill="#cc193a"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.881 8.076a.6.6 0 010 .848l-3.638 3.639a.6.6 0 01-.849 0l-1.818-1.82a.6.6 0 11.848-.848L8.82 11.29l3.214-3.214a.6.6 0 01.848 0z"
                  fill="#cc193a"
                ></path>
              </svg>
              <Image
                className={classes.image}
                src={imageSrc}
                width={90}
                height={90}
              />
              <div className={classes.info}>
                <div className={classes.name}>{name}</div>
                <div className={classes.price}>
                  {currentPrice.price}
                  <span> ₽</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
