import { card } from 'mtgsdk';
import React from 'react';
import { createCard } from './services/supabase-utils';


export default function Card({ name, imageUrl }) {

  async function handleClick() {
    const newCard = await createCard({ name: name, imageUrl: imageUrl });


  }

  return (
    <div className='deck' onClick={handleClick}>
      <img src={imageUrl} />
    </div>
  );
}
