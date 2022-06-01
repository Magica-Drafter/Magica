import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { logout } from './services/supabase-utils';

export default function Header() {
  return (
    <div className='header'>
      
      <div className='logo'>Logo</div>
      <div className='navLinks'>
        <Link to="/DecksPage" className='Link'>Decks</Link>
        <Link to="/AboutUs" className='Link'>About Us</Link>
        <button onClick={logout} >Logout</button>
      </div>

    </div>
  );
}
