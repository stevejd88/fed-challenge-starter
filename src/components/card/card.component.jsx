import React from 'react';

import './card.style.css';

const Card = ({ headline, time, views, thumbImg, trainerImg, workouts }) => {
  return (
    <div className='card'>
      <img className='thumbnail-img' src={thumbImg} alt='video' />
      <div className='card-info'>
        <div className='card-headline'>
          <p>{headline}</p>
          <img src={trainerImg} alt='trainer' />
        </div>
        {time && views ? (
          <div className='trainer-data'>
            <span>{time}</span>
            <span>{views}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
