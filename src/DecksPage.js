import React, { useState, useEffect } from 'react';
import Card from './Card';
import Decks from './Decks';
import { createDeck, getUser, getAllDecksByUser } from './services/supabase-utils';
import { useHistory } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

export default function DecksPage() {
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

      // console.log('returnedDecks', returnedDecks);

      setUserDecks(returnedDecks);
      setIsLoading(false);
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
      <div className='deck-container'>
        <h1>Create your deck</h1>
        <div className='deck-list'>
          
          <form onSubmit={handleDeckSubmit}>
            <label>Deck name: </label>
            <input required value={deckName} onChange={(e) => setDeckName(e.target.value)} />
            <button>Create Deck</button>
          </form>
        </div>
      
        <h1>Your Current Decks</h1>
        <div className="deck-list">
          
          {isLoading 
            ? <LoadingSpinner />
            : userDecks.map(({ deck_name, id }) => (
              <Decks key={deck_name + id} deck_name={deck_name} id={id} />
            ))
          }
        </div>
      </div>
    </>
  );
}
