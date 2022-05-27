import React from 'react';
import Card from './Card';

export default function CardList({ cards }) {
  //eslint-disable-line
  return (
    <div>
      {cards.map(({ name, imageUrl }) => (
        <Card key={name} name={name} imageUrl={imageUrl} />
      ))}
    </div>
  );
}
