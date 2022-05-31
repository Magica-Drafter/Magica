import React from 'react';
import { Link } from 'react-router-dom';
import Image from './images/magic-card-back.png';

export default function Decks({ deck_name, id }) {
  return (
    <Link to={`/deck/${id}`}>
      <div className="deck">
        <div>{deck_name}</div>
        <img src={Image} />
      </div>
    </Link>
  );
}
