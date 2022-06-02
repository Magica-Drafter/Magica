import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  getAllCardsByDeckId,
  deleteDeck,
  getDeckName,
  changeDeckName,
} from './services/supabase-utils';
import DraftedCard from './DraftedCard';

export default function Deck({ deleteCard, setDeleteCard }) {
  const params = useParams();
  const [cards, setCards] = useState([]);
  const history = useHistory();
  const [deckName, setDeckName] = useState();
  const [editDeckName, setEditDeckName] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    async function load() {
      // When we load the page, we look at what cards are in the deck and what its name is and put that in state
      const cardsReceived = await getAllCardsByDeckId(params.id);
      setDeckName(await getDeckName(params.id));
      setCards(cardsReceived);
      setEditDeckName(deckName);
    }

    load();
  }, [params.id, deleteCard, deckName]);

  function handleRename() {
    // If the user has clicked the "edit name" button, show the form that lets them input another name
    setShowButton(true);
  }

  async function handleRenameSubmit(e) {
    // Set the new name and hide the rename deck form once we're done with it
    e.preventDefault();
    await changeDeckName(params.id, editDeckName);
    setDeckName(editDeckName);
    setShowButton(false);
  }

  function handleRedraftDeck() {
    // When we click "redraft", set the current deck in local storage and go to the draft page
    localStorage.setItem('currentDeckId', params.id);

    history.push('/draft-page');
  }

  async function handleDeleteDeck() {
    // When we click "delete", delete the deck in supabase and go back to create page
    await deleteDeck(params.id);

    history.push('/create-deck');
  }
  return (
    <div className="edit-deck">
      <h1> {deckName} </h1>

      <button onClick={handleRename}>Rename Deck </button>
      {showButton ? (
        <form onSubmit={handleRenameSubmit}>
          <input value={editDeckName} onChange={(e) => setEditDeckName(e.target.value)} />
          <button> Submit</button>
        </form>
      ) : null}

      <button onClick={handleRedraftDeck}>Redraft Deck</button>
      <button onClick={handleDeleteDeck}>Delete Deck</button>
      
      <div className="card-list">
        {/* Map over and display all the cards that are in the deck already in supabase */}
        {cards.map(({ name, imageUrl, id }) => (
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
  );
}
