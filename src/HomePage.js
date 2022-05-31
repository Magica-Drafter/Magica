import React, { useState, useEffect } from 'react';
import { getRandomCard } from './services/fetch-utils';
import { getDraftedCards } from './services/supabase-utils';
import CardList from './CardList.js';

export default function HomePage({ deckId }) {
  const [cards, setCards] = useState([]);
  const [drafted, setDrafted] = useState([]);
  const [currentDeck, setCurrentDeck] = useState();
  const [rerender, setRerender] = useState();

  useEffect(() => {
    async function load() {
      const localDeck = localStorage.getItem('currentDeckId');

      setCurrentDeck(localDeck);

      const draftedCards = await getDraftedCards(localDeck);

      setDrafted(draftedCards);
      console.log('localDeck', localDeck);
      console.log('draftedCards', draftedCards);
      console.log('drafted', drafted);
    }
    load();
  }, [rerender]); //eslint-disable-line

  async function handleClick(color) {
    const randomCards = await getRandomCard(color);

    setCards(randomCards);
  }

  // useEffect(() => {
  //   async function load() {
  //     const drafted = await getDraftedCards(deckId);

  //     console.log('drafted', drafted);

  //     console.log('deckId', deckId);

  //     setDrafted(drafted);
  //   }
  //   load();
  // }, [deckId]);

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
      <button onClick={() => handleClick('|Red|')}>Red</button>
      <button onClick={() => handleClick('|Green|')}>Green</button>
      <button onClick={() => handleClick('|Black|')}>Black</button>
      <button onClick={() => handleClick('|Blue|')}>Blue</button>
      <button onClick={() => handleClick('|White|')}>White</button>

      {/* <h1>Choose your cards:</h1> */}
      {cards ? (
        <CardList
          deckId={deckId}
          cards={cards}
          drafted={drafted}
          currentDeck={currentDeck}
          setRerender={setRerender}
        />
      ) : null}
    </div>
  );
}
