import React from 'react';
import Card from './Card';

export default function CardList({ cards }) {
  //eslint-disable-line
  return (
    <div>
      {cards.map(({ name, imageUrl, multiverseid }) => (
        <Card key={name + multiverseid} name={name} imageUrl={imageUrl} />
      ))}
    </div>
  );
}
