import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeaderAbout.module.scss';
import { HeaderRating } from './HeaderRating';

interface Props {
  city: string;
  time: number;
  rating: number;
  reviewsCount: number;
}

export const HeaderAbout: React.FC<Props> = ({
  city,
  time,
  rating,
  reviewsCount,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.about}>
        Доставка пиццы{' '}
        <a href="#" className={styles.link}>
          {city}
        </a>
      </div>
      <div className={styles.review}>
        <div>{time} мин</div>
        <div className={styles.dot}>
          <i></i>
        </div>
        <div>{rating}</div>
        <div>
          <Image src="/star.svg" width={16} height={16} />
        </div>
        <div className={styles.tooltipWrapper}>
          <div className={styles.tooltip}>
            <div className={styles.tooltipBody}>
              <div className={styles.aboutDelivery}>
                <div className={styles.time}>{time} минут</div>
                <div className={styles.timeDiscription}>
                  Среднее время доставки
                </div>
                <div className={styles.offer}>
                  Если не успеем за 60 минут, вы получите сертификат на большую
                  пиццу
                </div>
              </div>
              <div className={styles.deliveryReviews}>
                <div className={styles.rating}>
                  {rating}
                  <HeaderRating score={rating} />
                </div>
                <div className={styles.reviews}>{reviewsCount} оценок</div>
                <div>Оценить заказ можно в мобильном приложении</div>
              </div>
            </div>
            <div className={styles.tooltipFooter}>
              Данные за последние 7 дней в вашем городе
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
