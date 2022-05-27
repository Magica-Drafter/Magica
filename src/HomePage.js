import React, { useState } from 'react';
import { getRandomCard } from './services/fetch-utils';
import CardList from './CardList.js';

export default function HomePage() {
  const [query, setQuery] = useState();
  const [cards, setCards] = useState([]);
  console.log(query); //eslint-disable-line

  async function fetchQuery() {
    setQuery('R');
    const randomCard = await getRandomCard(query);
    console.log('cardy', randomCard); //eslint-disable-line
    setCards(randomCard);
  }
  // async function setAndFetch() {
  //   await fetchQuery();
  //   setQuery('R');
  // }
  // useEffect(() => {
  //   // async function fetchQuery() {
  //   //   const randomCard = await getRandomCard(query);
  //   //   setCard(randomCard);
  //   // }
  //   fetchQuery();
  // }, [query]);
  console.log(cards); //eslint-disable-line
  return (
    <div>
      <button value={query} onClick={async () => await fetchQuery()}>Random</button>
      <p>{cards.name}</p>
      {cards ? <CardList cards={cards} /> : null }
    </div>
  );
}
