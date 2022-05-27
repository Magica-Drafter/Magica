import React, { useState, useEffect } from 'react';
import Card from './Card';
import { createDeck } from './services/supabase-utils';

export default function DecksPage({ setDeckId }) {
  const [deckName, setDeckName] = useState('');
  

  
  async function handleDeckSubmit(e) {
    e.preventDefault();
    const newDeck = await createDeck(deckName);
    const id = newDeck.data[0].id;

    console.log(newDeck, 3); //eslint-disable-line
    console.log(id, 'actual ID'); //eslint-disable-line
    console.log(typeof id, 'ID type'); //eslint-disable-line

    setDeckId(id);

    //console.log(deckId, 'deckId'); //eslint-disable-line
  }

  // useEffect(() => {
  //   console.log(deckId, 'deckId'); //eslint-disable-line
  // }, [deckId]); 

  return (
    <div>
      <h3>Create your deck</h3>
      <form onSubmit={handleDeckSubmit}>
        <label>Deck name: </label>
        <input value={deckName.deck_name} onChange={e => setDeckName(e.target.value)}/>
        <button>Create Deck</button>
      </form>
    </div>
  );
}
