import React from 'react';

export default function Card({ name, imageUrl }) {
  return (
    <div className='deck'>
      <img src={imageUrl} />
    </div>
  );
}
