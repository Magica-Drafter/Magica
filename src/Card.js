import React from 'react';
import { createCard } from './services/supabase-utils';

export default function Card({ name, imageUrl, setClick, currentDeck, handleSearchClick }) {

  async function handleDraftClick() {
    // On click of a card, add to draft pool and rerender another search fetch
    handleSelectCard();
    // impressive prop-drilling here, since this callback has to travel through 3 components to get here
    handleSearchClick();
  }

  async function handleSelectCard() {
    //Add the card we just clicked on into the supabase table of cards drafted
    const newClick = await createCard({ name: name, imageUrl: imageUrl, deck_id: currentDeck });

    // Now that we've drafted a new card, we need to rerender the page to show changes with setClick
    setClick(newClick);
  }

  return (
    <div className="card" onClick={handleDraftClick}>
      <img src={imageUrl} />
      {/* Cards are visually represented by their card image */}
    </div>
  );
}
