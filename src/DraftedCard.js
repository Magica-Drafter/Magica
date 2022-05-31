import React from 'react';
import { deleteDraftedCard } from './services/supabase-utils';

export default function DraftedCard({ imageUrl, id, setDeleteCard }) {
  console.log('newCardId', [id]);
  console.log(id);

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
