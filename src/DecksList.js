import React from 'react';
import { Link } from 'react-router-dom';
import Image from './images/magic-card-back.png';

export default function DecksList({ deck_name, id }) {
  return (
    <Link to={`/deck/${id}`}>
      <div className="deck">
        <h3>{deck_name}</h3>
        <img src={Image} />
      </div>
    </Link>
  );
}
