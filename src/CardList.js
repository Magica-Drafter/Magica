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
  handleSearchClick,
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
        {/* CardList is all cards on the screen, split into the top "search" part and the bottom "drafted" part */}
        <h1>Choose Cards</h1>
        <div className="card-list">
          {/* Each card fetched from the API is a Card component with an on click function to draft it */}
          {cards.map(({ name, imageUrl, multiverseid }) => (
            <Card
              key={name + multiverseid}
              name={name}
              imageUrl={imageUrl}
              setClick={setClick}
              currentDeck={currentDeck}
              handleSearchClick={handleSearchClick}
            />
          ))}
        </div>
        {/* We don't need to show the drafted cards if there aren't any of them */}
        {drafted.length > 0 ? (
          <div>
            <h1>{deckName} Draft</h1>
            <div className="draft-list">
              {/* Each card already drafted into supabase is a Card component with an on click function to remove it from the deck */}
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
