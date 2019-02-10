import React, { Component } from 'react';
import './App.css';
import DataVisualization from './containers/DataVisualization';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <DataVisualization/>
        </header>
      </div>
    );
  }
}

export default App;
