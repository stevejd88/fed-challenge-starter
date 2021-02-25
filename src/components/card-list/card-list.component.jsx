import React from 'react';

import Card from '../card/card.component';

import CardData from './card.data';

import './card-list.style.css';

const CardList = () => {
  return (
    <div className='card-list'>
      {CardData.map(({ id, ...otherData }) => (
        <Card key={id} {...otherData} />
      ))}
    </div>
  );
};

export default CardList;
