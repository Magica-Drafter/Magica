import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from './services/supabase-utils';

export default function Header() {
  return (
    <div className="header">
      <img src="./Magica.png" className="logo" />
      <div className="navLinks">
        <Link to="/create-deck" className="Link">
          Decks
        </Link>
        <Link to="/about-us" className="Link">
          About Us
        </Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
