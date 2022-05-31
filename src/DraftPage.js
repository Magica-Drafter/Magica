import React, { useState, useEffect } from 'react';
import { getRandomCard } from './services/fetch-utils';
import { getDraftedCards } from './services/supabase-utils';
import CardList from './CardList.js';
import { types, subtypes, sets } from './mtgparams';
import LoadingSpinner from './LoadingSpinner';

export default function DraftPage({ deleteCard, setDeleteCard }) {
  const [cards, setCards] = useState([]);
  const [drafted, setDrafted] = useState([]);
  const [currentDeck, setCurrentDeck] = useState();
  const [rerender, setRerender] = useState();
  const [type, setType] = useState('');
  const [set, setSet] = useState('');
  const [colorIdentity, setColorIdentity] = useState('R');
  const [isLoading, setIsLoading] = useState(false);
  // const [deleteCard, setDeleteCard] = useState();

  useEffect(() => {
    async function load() {

      const localDeck = localStorage.getItem('currentDeckId');

      setCurrentDeck(localDeck);

      const draftedCards = await getDraftedCards(localDeck);

      setDrafted(draftedCards);
    }
    load();
  }, [rerender, deleteCard]); //eslint-disable-line


  async function handleClick() {
    setIsLoading(true);
    const randomCards = await getRandomCard(colorIdentity, type, set);
    if (randomCards.length === 0) {
      alert('No results match your search.');
    }

    setCards(randomCards);
    setIsLoading(false);
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
    <>
      <div className="type-div">
        <p>Sort By Mana Color</p>
        <select value={colorIdentity} onChange={(e) => setColorIdentity(e.target.value)}>
          {
            <>
              <option key="red" value='R'>
                Red
              </option>
              <option key="green" value='G'>
                Green
              </option>
              <option key="blue" value='U'>
                Blue
              </option>
              <option key="white" value='W'>
                White
              </option>
              <option key="black" value='B'>
                Black
              </option>
              <option key="colorless" value=''>
                No Color Specified
              </option>
            </>
          }
        </select>
      </div>
      <div>
        <p>Sort By Type</p>
        <select onChange={(e) => setType(e.target.value)}>
          <option></option>
          {types.map((item) => (
            <option key={item} value={`${item}`}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>Sort By Set</p>
        <select onChange={(e) => setSet(e.target.value)}>
          <option></option>
          {sets.map((item) => (
            <option key={item} value={`${item}`}>
              {item}
            </option>
          ))}
        </select>
      </div>


      <div>
        <button onClick={handleClick}>Search</button>
        {/* <button onClick={() => handleClick('|Green|')}>Green</button>
        <button onClick={() => handleClick('|Black|')}>Black</button>
        <button onClick={() => handleClick('|Blue|')}>Blue</button>
        <button onClick={() => handleClick('|White|')}>White</button> */}

        {/* <h1>Choose your cards:</h1> */}

        
        {(cards && !isLoading) ? (
          <CardList
            // deckId={deckId}
            cards={cards}
            drafted={drafted}
            currentDeck={currentDeck}
            setRerender={setRerender}
            setDeleteCard={setDeleteCard}
          />
        ) : <LoadingSpinner />}
      </div>
    </>
  );
}

