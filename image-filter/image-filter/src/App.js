import React, { Component } from 'react';
import ButtonDiv from './ButtonDiv';
import logo from './logo.svg';
import './App.css';

import ArtBlock from './ArtBlock';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
          <ButtonDiv />
          <ArtBlock />
      </div>
    );
  }
}

export default App;
