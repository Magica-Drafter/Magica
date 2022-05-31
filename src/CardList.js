import React from 'react';
// import { getDraftedCards } from './services/supabase-utils';
import Card from './Card';
import DraftedCard from './DraftedCard';

export default function CardList({ cards, drafted, setRerender, currentDeck, setDeleteCard }) {
  //eslint-disable-line
  return (
    <>
      <h3>Choose Cards</h3>
      <div className="card-list">
        {cards.map(({ name, imageUrl, multiverseid }) => (
          <Card
            key={name + multiverseid}
            name={name}
            imageUrl={imageUrl}
            // deckId={deckId}
            setRerender={setRerender}
            currentDeck={currentDeck}
          />
        ))}
      </div>

      <h3>Your Current draft</h3>

      <div className="card-list">
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
    </>
  );
}
