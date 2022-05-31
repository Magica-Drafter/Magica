import React from 'react';
import { createCard } from './services/supabase-utils';
// import { getDraftedCards } from './services/supabase-utils';

export default function Card({ name, imageUrl, setRerender, currentDeck, handleDraftClick }) {
  
  async function handleClickWrapper() {
    handleDraftClick();
    handleClick();
    
  }
  async function handleClick() {
    const newCard = await createCard({ name: name, imageUrl: imageUrl, deck_id: currentDeck });
    setRerender(newCard);

  }
  

  return (
    <div className="deck" onClick={handleClickWrapper}>
      <img src={imageUrl} />
    </div>
  );
}
