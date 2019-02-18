import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./Product";
import Iklan from "./Iklan";

class App extends Component {
  render() {
    return (
   <header className="App-header">
        <div className="box"><Product judul="Power Bank" harga="10.100"/></div>
        <div className="box"><Product judul="Power Bank" harga="10.100"/></div>
        <div className="box"><Product judul="Power Bank" harga="10.100"/></div>
        <div className="box"><Product judul="Power Bank" harga="10.100"/></div>
        
      </header>
    );
  }
}

export default App;

/* <header className="App-header">
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
        </header> */
