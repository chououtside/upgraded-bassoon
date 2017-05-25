import React, { Component } from 'react';
import Search from './search';
import Info from './info';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Info />
      </div>
    );
  }
}

export default App;
