import React, { useState } from 'react';
import { createDeck } from './services/supabase-utils';

export default function DecksPage() {
  const [deckName, setDeckName] = useState('');

  async function handleDeckSubmit(e) {
    e.preventDefault();
    await createDeck(deckName);
    //console.log(newDeck, 1); //eslint-disable-line
  }

  return (
    <div>
      <h3>Create your deck</h3>
      <form onSubmit={handleDeckSubmit}>
        <label>Deck name:</label>
        <input onChange={e => setDeckName(e.target.value)}></input>
        <button>Create Deck</button>
      </form>
    </div>
  );
}
