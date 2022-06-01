import React from 'react';
// import { getDraftedCards } from './services/supabase-utils';
import Card from './Card';
import DraftedCard from './DraftedCard';
import { useState, useEffect } from 'react';
import { getDeckName } from './services/supabase-utils';

export default function CardList({ cards, drafted, setRerender, currentDeck, setDeleteCard, handleDraftClick }) {
  //eslint-disable-line
  const [deckName, setDeckName] = useState();

  useEffect(() => {
    async function load() {
      const localDeckId = localStorage.getItem('currentDeckId');
      setDeckName(await getDeckName(localDeckId));

    }
    load();
  }
  , []);


  return (
    <>
      <div className='draft-container'>
        <h1>Choose Cards</h1>
        <div className="card-list">
          {cards.map(({ name, imageUrl, multiverseid }) => (
            <Card
              key={name + multiverseid}
              name={name}
              imageUrl={imageUrl}
            // deckId={deckId}
              setRerender={setRerender}
              currentDeck={currentDeck}
              handleDraftClick={handleDraftClick}
            />
          ))}
        </div>

        <h1>{deckName} Draft</h1>

        <div className="draft-list">
          {drafted.map(({ name, imageUrl, id }) => (
            <DraftedCard
              key={name + id}
              name={name}
              imageUrl={imageUrl}
              id={id}
              setDeleteCard={setDeleteCard}
            // deckId={deckId}
            />
          ))}
        </div>
      </div>
    </>
  );
}
