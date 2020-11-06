import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  useEffect(() => {
    document.title = "DEV Env"
 }, []);

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        <h3>Environment: DEV</h3>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
