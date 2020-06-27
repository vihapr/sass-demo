import React from 'react';
import logo from './logo.svg';
import './App.scss';

import About from './About/About';

function App() {

  return (
    <div >
      <header className="Header">
        <img src={logo} className="Header-Logo" alt="logo" />
        <p className="Header-Text">
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p className="Header-Text Header-Text_small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="Header-Link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <About />
    </div>
  );
}

export default App;
