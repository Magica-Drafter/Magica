import React from 'react';
import { Link } from 'react-router-dom';
import Image from './images/magic-card-back.png';

export default function Deck({ deck_name, id }) {
  return (
    // Component is a view of a single deck, represented by a card back and its name
    <Link to={`/deck/${id}`}>
      <div className="deck">
        <h3>{deck_name}</h3>
        <img src={Image} />
      </div>
    </Link>
  );
}
