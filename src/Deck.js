import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getAllCardsByDeckId, deleteDeck, getDeckName } from './services/supabase-utils';
// import DeckItem from './DeckItem';
import DraftedCard from './DraftedCard';

export default function Deck({ deleteCard, setDeleteCard }) {
  const params = useParams();
  const [cards, setCards] = useState([]);
  const history = useHistory();
  const [deckName, setDeckName] = useState();

  useEffect(() => {
    async function load() {
      const cardsReceived = await getAllCardsByDeckId(params.id);
      // localStorage.setItem('currentDeckId', params.id);
      setDeckName(await getDeckName(params.id));

      console.log('cardsReceived', cardsReceived);

      setCards(cardsReceived);
    }

    load();
    // you'll need to define a fetch function here (then call it below) that gets this page's beanie baby and injects it into state using the correct state handler
  }, [params.id, deleteCard]);

  function handleClick() {
    localStorage.setItem('currentDeckId', params.id);

    history.push('/DraftPage');
  }

  async function handleDelete() {
    await deleteDeck(params.id);

    history.push('/DecksPage');
  }
  return (
    <>
      <h3> {deckName} </h3>
      <button onClick={handleClick}>ReDraft Deck</button>
      <button onClick={handleDelete}>Delete Deck</button>
      <div className="card-list">
        {cards.map(({ name, imageUrl, id }) => (
          // <DeckItem key={name + id} imageUrl={imageUrl} setDeleteCard={setDeleteCard} id={id} />
          <DraftedCard
            key={name + id}
            name={name}
            imageUrl={imageUrl}
            id={id}
            setDeleteCard={setDeleteCard}
          // deckId={deckId}
          />
        ))}
      </div>
    </>
  );
}
