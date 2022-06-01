import React from 'react';
import { deleteDraftedCard } from './services/supabase-utils';
import { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

export default function DraftedCard({ imageUrl, id, setDeleteCard }) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);
    await deleteDraftedCard(id);

    setDeleteCard(id);
    setIsLoading(false);
  }

  return (
    <div className="drafted-card">
      <img src={imageUrl} /><button onClick={handleClick} type="button" className='drafted-card-button'>Delete</button>

    </div>
    
  );
}
