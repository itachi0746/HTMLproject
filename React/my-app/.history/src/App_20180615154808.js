import React, { Component } from 'react';
import './styles/App.css';

import One from './components/One';
import Toggle from './components/Toggle';
import LoginControl from './components/LoginControl';
import Page from './components/Page';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Page />
        <LoginControl />
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
