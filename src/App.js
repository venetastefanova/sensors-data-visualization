import React, { Component } from 'react';
import './App.css';
import LatestEntry from './containers/LatestEntry';
import TodayStatistics from './containers/TodayStatistics'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <LatestEntry/>
         <TodayStatistics/>
        </header>
      </div>
    );
  }
}

export default App;
