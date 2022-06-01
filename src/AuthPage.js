import React, { useState } from 'react';
import { signInUser, signupUser } from './services/supabase-utils';

export default function AuthPage({ setCurrentUser }) {

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');  
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  function clearForms() {
    setSignInEmail('');
    setSignInPassword('');
    setSignUpEmail('');
    setSignUpPassword('');
  }

  
  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signupUser(signUpEmail, signUpPassword);
    setCurrentUser(user);
    clearForms();
  }

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signInUser(signInEmail, signInPassword);
    setCurrentUser(user);
    clearForms();
  }

  return (
    <div className="home-page">
      <div className='login-form'>
        <form onSubmit={handleSignUp}>
          <h2>Sign Up</h2>
          <label>
            <p>Email</p>
            <input value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input value={signUpPassword} type='password' onChange={e => setSignUpPassword(e.target.value)} />
          </label>
          <button>Sign Up</button>
        </form>
      </div>
      <div className='login-form'>
        <form onSubmit={handleSignIn}>
          <h2>Sign In</h2>
          <label>
            <p>Email</p>
            <input value={signInEmail} onChange={e => setSignInEmail(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input value={signInPassword} type='password' onChange={e => setSignInPassword(e.target.value)} />
          </label>
          <button>Sign In</button>
        </form>

      </div>
    </div>
  );
}