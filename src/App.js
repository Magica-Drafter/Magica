import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import AuthPage from './AuthPage';
import React, { useState, useEffect } from 'react';
import { logout, getUser } from './services/supabase-utils';
import Deck from './Deck.js';
import DraftPage from './DraftPage';
import DecksPage from './DecksPage';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [deleteCard, setDeleteCard] = useState();

  // const [deckId, setDeckId] = useState();
  // const [drafted, setDrafted] = useState();
  useEffect(() => {
    const user = getUser();
    setCurrentUser(user);
  }, []);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/DecksPage">Decks</Link>
          </li>
          <li>
            <Link to="/DraftPage">Draft</Link>
          </li>
          <button onClick={logout}>Logout</button>
        </ul>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {currentUser ? (
              <Redirect to="/DecksPage" />
            ) : (
              <AuthPage setCurrentUser={setCurrentUser} />
            )}
          </Route>
          <Route exact path="/DecksPage">
            {currentUser ? <DecksPage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/DraftPage">
            {currentUser ? (
              <DraftPage deleteCard={deleteCard} setDeleteCard={setDeleteCard} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route exact path="/Deck/:id">
            {currentUser ? (
              <Deck deleteCard={deleteCard} setDeleteCard={setDeleteCard} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
