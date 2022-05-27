import React from 'react';
import Card from './Card';

export default function CardList({ cards, deckId }) {
  //eslint-disable-line
  return (
    <div className='card-list'>
      {cards.map(({ name, imageUrl, multiverseid }) => (
        <Card key={name + multiverseid} name={name} imageUrl={imageUrl} deckId={deckId}/>
      ))}
    </div>
  );
}
