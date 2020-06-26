import React from 'react';
import { locations } from '@jj/dictionary';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {locations.map(location => (
          <p key={location}>
            {location}
          </p>
        ))}
      </header>
    </div>
  );
}

export default App;
