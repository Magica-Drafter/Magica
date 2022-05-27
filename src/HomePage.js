import React, { useState, useEffect } from 'react';
import { getRandomCard } from './services/fetch-utils';
import CardList from './CardList.js';

export default function HomePage() {
  const [cards, setCards] = useState([]); //eslint-disable-line


  async function handleClick(color) {
    const randomCards = await getRandomCard(color);

    setCards(randomCards);


  }



  // useEffect(() => {
  //   async function fetchQuery() {
  //     const randomCard = await getRandomCard(query);
  //     setCards(randomCard);
  //   }
  //   fetchQuery();
  //   setQuery();
  // }, [query]);
  //eslint-disable-line

  return (
    <div>
      <button onClick={() => handleClick('|Red|')}>
        Red
      </button>

      <button onClick={() => handleClick('|Green|')}>
        Green
      </button>

      <button onClick={() => handleClick('|Black|')}>
        Black
      </button>

      <button onClick={() => handleClick('|Blue|')}>
        Blue
      </button>

      <button onClick={() => handleClick('|White|')}>
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
