import React from 'react';
import logo from './footer-logo.png';
import './App.css';
import EventContainer from './views/EventContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EventContainer />
      </header>
    </div>
  );
}

export default App;
