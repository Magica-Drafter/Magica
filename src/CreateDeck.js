import React, { useState, useEffect } from 'react';
import Deck from './Deck';
import { createDeck, getUser, getAllDecksByUser } from './services/supabase-utils';
import { useHistory } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

export default function CreateDeck() {
  //Here we set state for the user's deck information and loading state.
  const [deckName, setDeckName] = useState('');
  const [userDecks, setUserDecks] = useState([]);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function load() {
      // Here we receive the user Id of the currently logged in user.
      const loggedInUser = await getUser();

      const userId = loggedInUser.id;
      setIsLoading(true);
      // Loading is true while decks are being fetched from supabase. We then set the received decks to the variable returnedDecks and use it to update state.
      const returnedDecks = await getAllDecksByUser(userId);

      setUserDecks(returnedDecks);
      setIsLoading(false);
    }
    load();
  }, []);

  async function handleDeckSubmit(e) {
    e.preventDefault();
    // Here we create a new deck in supabase on submit.
    const newDeck = await createDeck(deckName);
    const id = newDeck.data[0].id;
    // Here we set the deck id to local storage to have a persistent value.
    localStorage.setItem('currentDeckId', id);
    setDeckName('');
    // Here we use useHistory to redirect user to draft page upon creation of deck.
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
          {isLoading 
            ? <LoadingSpinner /> 
              // If loading show loading spinner, otherwise map over user decks for display.
            : userDecks.map(({ deck_name, id }) => (
                <Deck key={deck_name + id} deck_name={deck_name} id={id} />
              ))
            }
        </div>
      </div>
    </>
  );
}
