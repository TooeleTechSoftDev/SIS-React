import React from 'react';
import logo from './footer-logo.png';
import './App.css';
import EventList from './views/EventList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EventList userId='mlutes'/>
      </header>
    </div>
  );
}

export default App;
