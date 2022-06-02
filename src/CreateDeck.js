import React, { useState, useEffect } from 'react';
import DecksList from './DecksList';
import { createDeck, getUser, getAllDecksByUser } from './services/supabase-utils';
import { useHistory } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

export default function CreateDeck() {
  const [deckName, setDeckName] = useState('');
  const [userDecks, setUserDecks] = useState([]);
  const [render, setRender] = useState([]);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function load() {
      const loggedInUser = await getUser();

      const userId = loggedInUser.id;
      setIsLoading(true);
      const returnedDecks = await getAllDecksByUser(userId);

      setUserDecks(returnedDecks);
      setIsLoading(false);
    }
    load();
  }, [render]);

  async function handleDeckSubmit(e) {
    e.preventDefault();
    const newDeck = await createDeck(deckName);
    const id = newDeck.data[0].id;

    localStorage.setItem('currentDeckId', id);
    setRender(id);
    setDeckName('');
    history.push('/draft-page');
  }

  return (
    <>
      <div className="deck-container">
        <h1>Create your deck</h1>
        <div className="deck-list">
          <form onSubmit={handleDeckSubmit}>
            <label>Deck name: </label>
            <input required value={deckName} onChange={(e) => setDeckName(e.target.value)} />
            <button>Create Deck</button>
          </form>
        </div>
        <h1>Your Current Decks</h1>
        <p> Click to view or edit a specific deck.</p>
        <div className="deck-list">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            userDecks.map(({ deck_name, id }) => (
              <DecksList key={deck_name + id} deck_name={deck_name} id={id} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
