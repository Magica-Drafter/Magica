import React from 'react';
import { deleteDraftedCard } from './services/supabase-utils';

export default function DeckItem({ imageUrl, setDeleteCard, id }) {
  async function handleClick() {
    await deleteDraftedCard(id);

    setDeleteCard(id);
  }
  return (
    <div className="deck" onClick={handleClick}>
      <img src={imageUrl} />
    </div>
  );
}
