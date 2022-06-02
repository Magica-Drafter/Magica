import React from 'react';
import { createCard } from './services/supabase-utils';

export default function Card({ name, imageUrl, setClick, currentDeck, handleDraftClick }) {
  async function handleClickWrapper() {
    handleClick();
    handleDraftClick();
  }

  async function handleClick() {
    const newClick = await createCard({ name: name, imageUrl: imageUrl, deck_id: currentDeck });
    setClick(newClick);
  }

  return (
    <div className="card" onClick={handleClickWrapper}>
      <img src={imageUrl} />
    </div>
  );
}
