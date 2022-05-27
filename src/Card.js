import React from 'react';

export default function Card({ card }) {
  return (
    <div>
      <h1>{card.name}</h1>
      <img src={card.imageUrl} />
    </div>
  );
}
