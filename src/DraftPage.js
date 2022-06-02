import React, { useState, useEffect } from 'react';
import { getRandomCards } from './services/fetch-utils';
import { getDraftedCards } from './services/supabase-utils';
import CardList from './CardList.js';
import { types, sets } from './mtgparams';
import LoadingSpinner from './LoadingSpinner';

export default function DraftPage({ deleteCard, setDeleteCard }) {
  const [cards, setCards] = useState([]);
  const [drafted, setDrafted] = useState([]);
  const [currentDeck, setCurrentDeck] = useState();
  const [click, setClick] = useState();
  const [type, setType] = useState('');
  const [set, setSet] = useState('');
  const [colorIdentity, setColorIdentity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [draftLoading, setDraftLoading] = useState(false);

  useEffect(() => {
    async function load() {
      // Here we retrive currentDeckId from local storage to set currentDeck
      const localDeck = localStorage.getItem('currentDeckId');
      setIsLoading(true);
      setCurrentDeck(localDeck);
      // Here we fetch draftedCards from supabase based on deck ID.
      const draftedCards = await getDraftedCards(localDeck);
      // Here we set drafted cards so that it can be mapped over later.
      setDrafted(draftedCards);
      setIsLoading(false);
    }
    load();
    // Here we set re-render to be based on cards getting added or removed from deck.
  }, [click, deleteCard]); //eslint-disable-line
  // This function is called after user selects inputs and presses search
  async function handleSearchClick() {
    setDraftLoading(true);
    // Here we fetch 15 random cards from api based on user input for colorIdentity, type, set
    const randomCards = await getRandomCards(colorIdentity, type, set);
    if (randomCards.length === 0) {
      alert('No results match your search.');
    }
    setCards(randomCards);
    setDraftLoading(false);
  }

  return (
    <div>
      <div className="draft-dropdowns">
        <div>
          <label>Filter By Mana Color</label>
          <select value={colorIdentity} onChange={(e) => setColorIdentity(e.target.value)}>
            {
              <>
                <option key="red" value="R">
                  Red
                </option>
                <option key="green" value="G">
                  Green
                </option>
                <option key="blue" value="U">
                  Blue
                </option>
                <option key="white" value="W">
                  White
                </option>
                <option key="black" value="B">
                  Black
                </option>
                <option key="colorless" value="">
                  No Color Specified
                </option>
              </>
            }
          </select>
        </div>
        <div>
          {/* Types and Sets dropdowns are generated from the file mtgparams.js which are used to filter the cards that are returned on search */}
          <label>Filter By Type</label>
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
          <label>Filter By Set</label>
          <select onChange={(e) => setSet(e.target.value)}>
            <option></option>
            {sets.map((item) => (
              <option key={item} value={`${item}`}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <div className="draft-border">
        {/* If cards are present and both loading statuses are finished we display CardList Component. */}
        {cards && !isLoading && !draftLoading ? (
          <CardList
            cards={cards}
            drafted={drafted}
            currentDeck={currentDeck}
            setClick={setClick}
            setDeleteCard={setDeleteCard}
            handleSearchClick={handleSearchClick}
          />
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
}
