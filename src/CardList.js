import React from 'react';
import Card from './Card';
import DraftedCard from './DraftedCard';
import { useState, useEffect } from 'react';
import { getDeckName } from './services/supabase-utils';

export default function CardList({
  cards,
  drafted,
  setClick,
  currentDeck,
  setDeleteCard,
  handleDraftClick,
}) {
  const [deckName, setDeckName] = useState();

  useEffect(() => {
    async function load() {
      const localDeckId = localStorage.getItem('currentDeckId');
      setDeckName(await getDeckName(localDeckId));
    }
    load();
  }, []);

  return (
    <span>
      <div className="draft-container">
        <h1>Choose Cards</h1>
        <div className="card-list">
          {cards.map(({ name, imageUrl, multiverseid }) => (
            <Card
              key={name + multiverseid}
              name={name}
              imageUrl={imageUrl}
              setClick={setClick}
              currentDeck={currentDeck}
              handleDraftClick={handleDraftClick}
            />
          ))}
        </div>
        {drafted.length > 0 ? (
          <div>
            <h1>{deckName} Draft</h1>
            <div className="draft-list">
              {drafted.map(({ name, imageUrl, id }) => (
                <DraftedCard
                  key={name + id}
                  name={name}
                  imageUrl={imageUrl}
                  id={id}
                  setDeleteCard={setDeleteCard}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </span>
  );
}
