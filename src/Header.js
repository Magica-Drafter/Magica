import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from './services/supabase-utils';

export default function Header({ currentUser }) {
  return (
    <div className="header">
      <img src="./Magica.png" className="logo" />
      <div className="navLinks">
        {currentUser ? (
          <Link to="/create-deck" className="Link">
            Decks
          </Link>
        ) : null}
        <Link to="/about-us" className="Link">
          About Us
        </Link>
        {currentUser ? <button onClick={logout}>Logout</button> : null}
      </div>
    </div>
  );
}
