import React, { useState, useEffect } from 'react';
import { getRandomCard } from './services/fetch-utils';
import CardList from './CardList.js';

export default function HomePage() {
  const [query, setQuery] = useState();
  const [cards, setCards] = useState([]); //eslint-disable-line

  async function fetchQuery() {
    const randomCard = await getRandomCard(query);
    console.log('cardy', randomCard); //eslint-disable-line
    setCards(randomCard);
  }
  // async function setAndFetch() {
  //   await fetchQuery();
  //   setQuery('R');
  // }
  useEffect(() => {
    async function fetchQuery() {
      const randomCard = await getRandomCard(query);
      setCards(randomCard);
    }
    fetchQuery();
    setQuery();
  }, [query]);
  //eslint-disable-line

  return (
    <div>
      <button value={query} onClick={async () => setQuery('|Red|')}>
        Red
      </button>

      <button value={query} onClick={async () => setQuery('|Green|')}>
        Green
      </button>

      <button value={query} onClick={async () => setQuery('|Black|')}>
        Black
      </button>

      <button value={query} onClick={async () => setQuery('|Blue|')}>
        Blue
      </button>

      <button value={query} onClick={async () => setQuery('|White|')}>
        White
      </button>

      <div className='card-list'>
        <h1>Choose your cards:</h1>
        {cards ? <CardList cards={cards} /> : null}
      </div>

      <div className='draft-deck'>
        <h1>Your current draft:</h1>

      </div>
    </div>
  );
}
