import React from 'react';
import { deleteDraftedCard } from './services/supabase-utils';

export default function DraftedCard({ imageUrl, id, setDeleteCard }) {
  async function handleDeleteCard() {
    const deletedCard = await deleteDraftedCard(id);
    setDeleteCard(deletedCard);
  }

  return (
    <div className="drafted-card">
      <img src={imageUrl} />
      <button onClick={handleDeleteCard} type="button" className="drafted-card-button">
        Delete
      </button>
    </div>
  );
}
