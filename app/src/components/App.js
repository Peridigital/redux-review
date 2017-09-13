import React, { Component } from 'react';
import hotdog from '../hotdog.svg';
import './App.css';

import Menu from './Menu'
import Checkout from './Checkout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={hotdog} className="App-logo" alt="logo" />
          <h2>Welcome to Foodman's Restaurant</h2>
        </div>
       <Menu />
       <Checkout />
      </div>
    );
  }
}

export default App;
