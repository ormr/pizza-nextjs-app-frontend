import React from 'react';

import classes from './HeaderRating.module.scss';

interface Props {
  score: number;
}

export const HeaderRating: React.FC<Props> = ({ score }) => {
  const getStarArray = (rating: number) => {
    if (rating > 5) rating = 5;

    const countOfStarts = Math.floor(rating);
    const starts = [];

    for (let i = 0; i < countOfStarts; i++) {
      starts.push(100);
    }

    if (rating < 5) {
      starts.push(Math.floor((rating % 1) * 100));

      const diff = 5 - rating;

      for (let i = 1; i < diff; i++) {
        starts.push(0);
      }
    }

    return starts;
  };

  const arrayOfStars = getStarArray(score);
  return (
    <div className={classes.stars}>
      {arrayOfStars.map((item, index) => (
        <i key={index}>
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`star-svg-${index}`}>
                <stop offset={`${item}%`} stopColor="#FFD200"></stop>
                <stop
                  offset={`${item}%`}
                  stopColor="#999"
                  stopOpacity="0.3"
                ></stop>
              </linearGradient>
            </defs>
            <path
              fill={`url(#star-svg-${index})`}
              d="M9.24429 0.293816C9.42769 -0.0778064 9.95762 -0.0778074 10.141 0.293815L12.6056 5.28753C12.6784 5.43511 12.8192 5.53739 12.982 5.56106L18.4929 6.36184C18.903 6.42143 19.0668 6.92541 18.77 7.21468L14.7823 11.1018C14.6645 11.2166 14.6107 11.3821 14.6385 11.5443L15.5799 17.0329C15.65 17.4414 15.2212 17.7529 14.8544 17.56L9.92533 14.9687C9.77966 14.8921 9.60565 14.8921 9.45998 14.9687L4.53089 17.56C4.16408 17.7529 3.73536 17.4414 3.80541 17.0329L4.74679 11.5443C4.77461 11.3821 4.72083 11.2166 4.60299 11.1018L0.615268 7.21468C0.318509 6.92541 0.482264 6.42143 0.892374 6.36184L6.40327 5.56106C6.56612 5.53739 6.70691 5.43511 6.77974 5.28753L9.24429 0.293816Z"
            ></path>
          </svg>
        </i>
      ))}
    </div>
  );
};
