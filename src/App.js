import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchMovie from './components/SearchMovie'

function App() {
  return (
    <div className="container">
      <h1 className="title">
        React Movie Pile
        <SearchMovie/>
      </h1>
    </div>
  );
}

export default App;
