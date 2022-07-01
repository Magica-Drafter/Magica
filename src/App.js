/* Incredibly clean code for a first big react app. I have very little to say here--you made all the decisions I would have made, aside from a few very minor code style issues. Your code is broken into a super-maintainable bento-box, with goldilocks components that are neither too big nor too small--just right! If you keep up all the good habits you demonstrate in this app, you will be very popular every team you work on in your career. Great work! */

import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './AuthPage';
import React, { useState, useEffect } from 'react';
import { getUser } from './services/supabase-utils';
import DeckDetail from './DeckDetail.js';
import MeetTheMakers from './MeetTheMakers';
import DraftPage from './DraftPage';
import CreateDeck from './CreateDeck';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  // The deleteCard state is passed to DraftPage and DeckDetail components in order to ultimately set deleteCard when the handleDeleteCard function is called.
  const [deleteCard, setDeleteCard] = useState();

  useEffect(() => {
    // good idea, popping the user in state from the get go if there is one
    const user = getUser();
    setCurrentUser(user);
  }, []);

  return (
    <Router>
      <Header currentUser={currentUser} />
      <div className="App">
        <Switch>
          <Route exact path="/">
            {/* i won't correct it throughout the app, but i personally perfect no parens around JSX in terneries. Just a style thing for me, others may disagree. */}
            {currentUser 
             ? <Redirect to="/create-deck" />
             : <AuthPage setCurrentUser={setCurrentUser} />
            }
          </Route>
          <Route exact path="/create-deck">
            {currentUser ? <CreateDeck /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/draft-page">
            {currentUser ? (
              <DraftPage deleteCard={deleteCard} setDeleteCard={setDeleteCard} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route exact path="/deck/:id">
            {currentUser ? (
              <DeckDetail deleteCard={deleteCard} setDeleteCard={setDeleteCard} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route exact path="/meet-the-makers">
            <MeetTheMakers />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
