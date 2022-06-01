import React from 'react';
import { deleteDraftedCard } from './services/supabase-utils';

export default function DraftedCard({ imageUrl, id, setDeleteCard }) {
  // console.log('newCardId', [id]);
  // console.log(id);

  async function handleClick() {
    await deleteDraftedCard(id);

    setDeleteCard(id);
  }

  return (
    <div className="drafted-card">
      <img src={imageUrl} />
      <button onClick={handleClick} type="button" className='drafted-card-button'>Delete</button>
    </div>
    
  );
}
