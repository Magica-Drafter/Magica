import React, { useState, useEffect } from 'react';
import { getRandomCard } from './services/fetch-utils';
import { getDraftedCards } from './services/supabase-utils';
import CardList from './CardList.js';
import { types, subtypes, sets } from './mtgparams';

export default function DraftPage({ deleteCard, setDeleteCard }) {
  const [cards, setCards] = useState([]);
  const [drafted, setDrafted] = useState([]);
  const [currentDeck, setCurrentDeck] = useState();
  const [rerender, setRerender] = useState();
  const [type, setType] = useState('Artifact');
  const [colorIdentity, setColorIdentity] = useState('|Red|');
  // const [deleteCard, setDeleteCard] = useState();

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
  }, [rerender, deleteCard]); //eslint-disable-line

  console.log('deleteCard', deleteCard);

  async function handleClick() {
    const randomCards = await getRandomCard(colorIdentity, type);

    // console.log('color', color);

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

      <div />

      <div>
        <button onClick={handleClick}>Search</button>
        {/* <button onClick={() => handleClick('|Green|')}>Green</button>
        <button onClick={() => handleClick('|Black|')}>Black</button>
        <button onClick={() => handleClick('|Blue|')}>Blue</button>
        <button onClick={() => handleClick('|White|')}>White</button> */}

        {/* <h1>Choose your cards:</h1> */}
        {cards ? (
          <CardList
            // deckId={deckId}
            cards={cards}
            drafted={drafted}
            currentDeck={currentDeck}
            setRerender={setRerender}
            setDeleteCard={setDeleteCard}
          />
        ) : null}
      </div>
    </>
  );
}

