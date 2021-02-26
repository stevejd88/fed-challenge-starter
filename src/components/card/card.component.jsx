import React, { useState } from 'react';

import './card.style.css';

const Card = ({ headline, time, views, thumbImg, trainerImg, workouts }) => {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    setIsSelected(true);
  }

  return (
    <div
      className={`card ${isSelected ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      <div className='thumbnail-div'>
        <img className='thumbnail-img' src={thumbImg} alt='video' />
        {workouts ? (
          <div className='workout-overlay'>
            <p>{workouts}</p>
            <p className='workouts'>workouts</p>
          </div>
        ) : null}
      </div>

      <div className='card-info'>
        <div className='card-headline'>
          <p>{headline}</p>
          <img src={trainerImg} alt='trainer' />
        </div>
        {time && views ? (
          <div className='trainer-data'>
            <span>
              <i className='glyphicon glyphicon-time'></i>
              {time}
            </span>
            <span>
              <i className='glyphicon glyphicon-eye-open'></i>
              {views}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
