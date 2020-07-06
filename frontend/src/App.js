import React from 'react';
import logo from './logo.svg';
import './App.css';
import './scss/layout/navbar.scss'
import Navbar from './components/navbar/navbar'


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
