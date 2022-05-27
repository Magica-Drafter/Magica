import React from 'react';
import Card from './Card';

export default function CardList({ cards }) {
    console.log(cards); //eslint-disable-line
  return (
    <div>
      {Object.keys(cards).map((card, i) => (
        <Card key={cards.cards + i} card={card}/>
      ))}
    </div>
  );
}
