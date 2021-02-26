import React, { useState } from 'react';

import Card from '../card/card.component';

import CardData from './card.data';

import './card-list.style.css';

const CardList = () => {
  const [isSelected, setIsSelected] = useState(null);

  const handleCardClick = (id) => {
    setIsSelected(id);
  };

  return (
    <div className='card-list'>
      {CardData.map(({ id, ...otherData }) => (
        <Card
          key={id}
          className={isSelected === id && 'clicked'}
          onClick={() => handleCardClick(id)}
          {...otherData}
        />
      ))}
    </div>
  );
};

export default CardList;
