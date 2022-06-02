import React from 'react';
import { createCard } from './services/supabase-utils';

export default function Card({ name, imageUrl, setClick, currentDeck, handleSearchClick }) {
  async function handleDraftClick() {
    handleSelectCard();
    handleSearchClick();
  }

  async function handleSelectCard() {
    const newClick = await createCard({ name: name, imageUrl: imageUrl, deck_id: currentDeck });
    setClick(newClick);
  }

  return (
    <div className="card" onClick={handleDraftClick}>
      <img src={imageUrl} />
    </div>
  );
}
