import React from 'react';
import { deleteDraftedCard } from './services/supabase-utils';

export default function DraftedCard({ imageUrl, id, setDeleteCard }) {
  async function handleDeleteCard() {
    const deletedCard = await deleteDraftedCard(id);
    setDeleteCard(deletedCard);
  }

  // great work breaking these pieces down into small components. this good habit really pays off once your project grows past a certain size
  return (
    <div className="drafted-card">
      <img src={imageUrl} />
      <button onClick={handleDeleteCard} type="button" className="drafted-card-button">
        Delete
      </button>
    </div>
  );
}
