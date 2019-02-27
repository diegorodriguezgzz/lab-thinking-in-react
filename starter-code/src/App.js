import React, { Component } from 'react';
import FiltSearchBar from './components/FiltSearchBar';
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Welcome to my super cool store...</h1>
        <FiltSearchBar />
      </div>
    );
  }
}

export default App;
