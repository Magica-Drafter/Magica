import React from 'react';
import { createCard } from './services/supabase-utils';


export default function Card({ name, imageUrl, deckId }) {
  console.log(deckId, 'in card ID'); //eslint-disable-line
  async function handleClick() {
    const newCard = await createCard({ name: name, imageUrl: imageUrl, deck_id: deckId });


  }

  return (
    <div className='deck' onClick={handleClick}>
      <img src={imageUrl} />
    </div>
  );
}
