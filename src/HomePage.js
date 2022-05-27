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
  //   setQuery('R')
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
      <button value={query} onClick={async () => setQuery('R')}>
        Red
      </button>

      <button value={query} onClick={async () => setQuery('G')}>
        Green
      </button>

      <button value={query} onClick={async () => setQuery('B')}>
        Black
      </button>

      <button value={query} onClick={async () => setQuery('U')}>
        Blue
      </button>

      <button value={query} onClick={async () => setQuery('W')}>
        White
      </button>

      <p>{cards.name}</p>
      {cards ? <CardList cards={cards} /> : null}
    </div>
  );
}
