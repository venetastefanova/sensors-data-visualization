import React, { Component } from 'react';
import './App.css';
import LastEntry from './containers/LastEntry';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <LastEntry/>
        </header>
      </div>
    );
  }
}

export default App;
