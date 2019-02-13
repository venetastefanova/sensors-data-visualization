import React, { Component } from "react";
import "./App.css";
import LatestEntry from "./containers/LatestEntry";
import TodayStatistics from "./containers/TodayStatistics";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="Content">
          <LatestEntry />
          <TodayStatistics />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
