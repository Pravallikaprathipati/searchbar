/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import countryData from './data/countries.json';

function App() {
  return (
    <div className="App">
      <h1>Country Search</h1>
      <SearchBar data={countryData} />
    </div>
  );
}

export default App;
