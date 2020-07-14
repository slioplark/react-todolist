import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
