import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from './services/supabase-utils';

export default function Header({ currentUser }) {
  return (
    <div className="header">
      <a href='/'>
        <img src="./Magica.png" className="logo" />
      </a>
      <div className="navLinks">
        {currentUser ? (
          <Link to="/create-deck" className="Link">
            Decks
          </Link>
        ) : null}
        <Link to="/meet-the-makers" className="Link">
          Meet the Makers
        </Link>
        {currentUser ? <button onClick={logout}>Logout</button> : null}
      </div>
    </div>
  );
}
