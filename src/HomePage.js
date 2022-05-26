import React, { useState, useEffect } from 'react';
import { getRandomCard } from './services/fetch-utils';

export default function HomePage() {
  const [query, setQuery] = useState('R');
  const [card, setCard] = useState({});
  console.log(query); //eslint-disable-line
  useEffect(() => {
    async function fetchQuery() {
      const randomCard = await getRandomCard(query);
      setCard(randomCard);
    }
    fetchQuery();
  }, [query]);

  return (
    <div>
      <button value={query} onClick={() => setQuery('R')}>Random</button>
      <p>{card.name}</p>
    </div>
  );
}
