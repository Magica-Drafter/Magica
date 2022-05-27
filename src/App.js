import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import AuthPage from './AuthPage';
import React, { useState } from 'react';
import { logout } from './services/supabase-utils';
import HomePage from './HomePage';
import DraftPage from './DraftPage';
import DecksPage from './DecksPage';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));
  const [deckId, setDeckId] = useState();

  return (
    
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/DraftPage">Draft</Link>
          </li>
          <li>
            <Link to="/DecksPage">Saved Decks</Link>
          </li>
          <button onClick={logout}>Logout</button>
        </ul>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {
              currentUser 
                ? <Redirect to="/home"/>
                : <AuthPage setCurrentUser={setCurrentUser} />
            }
          </Route>
          <Route path="/DraftPage">
            {
              !currentUser 
                ? <Redirect to="/"/>
                : <DraftPage />
            }
            
          </Route>
          <Route path="/DecksPage">
            {
              !currentUser 
                ? <Redirect to="/"/>
                : <DecksPage setDeckId={setDeckId}/>
            }
            
          </Route>
          <Route path="/">
            {
              !currentUser 
                ? <Redirect to="/"/>
                : <HomePage deckId={deckId}/>
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
