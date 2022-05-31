import React, { useState, useEffect } from 'react';
import Card from './Card';
import Decks from './Decks';
import { createDeck, getUser, getAllDecksByUser } from './services/supabase-utils';
import { useHistory } from 'react-router-dom';

export default function DecksPage() {
  const [deckName, setDeckName] = useState('');
  const [userDecks, setUserDecks] = useState([]);
  const [render, setRender] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function load() {
      const loggedInUser = await getUser();

      const userId = loggedInUser.id;
      const returnedDecks = await getAllDecksByUser(userId);

      // console.log('returnedDecks', returnedDecks);

      setUserDecks(returnedDecks);
    }
    load();
  }, [render]);

  async function handleDeckSubmit(e) {
    e.preventDefault();
    const newDeck = await createDeck(deckName);
    const id = newDeck.data[0].id;

    const localDeckId = localStorage.setItem('currentDeckId', id);

    // console.log(newDeck, 3); //eslint-disable-line
    // console.log(id, 'actual ID'); //eslint-disable-line
    // console.log(typeof id, 'ID type'); //eslint-disable-line

    // console.log('currentUser', currentUser.id);

    setRender(id);

    setDeckName('');


    history.push('/DraftPage');
    // console.log('newDeck', newDeck);
    //console.log(deckId, 'deckId'); //eslint-disable-line
  }

  // useEffect(() => {
  //   console.log(deckId, 'deckId'); //eslint-disable-line
  // }, [deckId]);

  return (
    <>
      <div>
        <h3>Create your deck</h3>
        <form onSubmit={handleDeckSubmit}>
          <label>Deck name: </label>
          <input required value={deckName} onChange={(e) => setDeckName(e.target.value)} />
          <button>Create Deck</button>
        </form>
      </div>
      <h3>Your Current Decks</h3>
      <div className="deck-list">
        {userDecks.map(({ deck_name, id }) => (
          <Decks key={deck_name + id} deck_name={deck_name} id={id} />
        ))}
      </div>
    </>
  );
}
