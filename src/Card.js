import React from 'react';
import { createCard } from './services/supabase-utils';

export default function Card({ name, imageUrl, setRerender, currentDeck, handleDraftClick }) {
  async function handleClickWrapper() {
    handleClick();
    handleDraftClick();   
  }

  async function handleClick() {
    await createCard({ name: name, imageUrl: imageUrl, deck_id: currentDeck });
    setRerender(true);
  }
  

  return (
    <div className="card" onClick={handleClickWrapper}>
      <img src={imageUrl} />
    </div>
  );
}
