import React, { Component } from 'react'
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, VerticalBarSeries} from 'react-vis';

class DataVisualization extends Component {
  state = {
    "date":"2019-02-09T18:00:00.000Z",
    "sensor1":149.8,
    "sensor2":266.95,
    "sensor3":-10.700000000000045,
    "sensor4":69.7
  }
  render() {
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];
    return (
      
      <div>
       <XYPlot height={300} width={300}>
       <VerticalBarSeries data={data} />

        </XYPlot>
       
      </div>
    )
  }
}

export default DataVisualization;