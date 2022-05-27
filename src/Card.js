import React from 'react';

export default function Card({ name, imageUrl }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} />
    </div>
  );
}
