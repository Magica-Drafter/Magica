import React from 'react';
import { createCard } from './services/supabase-utils';
// import { getDraftedCards } from './services/supabase-utils';

export default function Card({ name, imageUrl, setRerender, currentDeck }) {
  // const [draftedCards, setDraftedCards] = useState([]); //eslint-disable-line
  async function handleClick() {
    const newCard = await createCard({ name: name, imageUrl: imageUrl, deck_id: currentDeck });

    // setNewCardId(newCard.data[0].id);

    // console.log('newcardID', newCard.data[0].id);

    // console.log('newcardtest', newCard);

    setRerender(newCard);
  }

  return (
    <div className="deck" onClick={handleClick}>
      <img src={imageUrl} />
    </div>
  );
}
