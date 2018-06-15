import React, { Component } from 'react';
import './styles/App.css';

import One from './components/One';
import Toggle from './components/Toggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle />
        <One />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
