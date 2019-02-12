import React, { Component } from "react";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  DiscreteColorLegend
} from "react-vis";
import * as actions from "../store/actions/actions";
import { connect } from "react-redux";

class TodayStatistics extends Component {
  render() {
    const legendItems = [
      {
        title: "Sensor1",
        color: "red",
        strokeWidth: 10
      },
      {
        title: "sensor2",
        color: "green",
        strokeWidth: 10
      },
      {
        title: "Sensor3",
        color: "blue",
        strokeWidth: 10
      },
      {
        title: "Sensor4",
        color: "orange",
        strokeWidth: 10
      }
    ];
    return (
      <div className="TodayStatistics"> 
        <h2>Today's overview</h2>
        <XYPlot height={500} width={650}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="EET + 02:00" />
          <YAxis title="Value" />
          <DiscreteColorLegend items={legendItems} orientation="horizontal" />
          <LineSeries data={this.props.sensorOneToday} color="red" />
          <LineSeries data={this.props.sensorTwoToday} color="green" />
          <LineSeries data={this.props.sensorThreeToday} color="blue" />
          <LineSeries data={this.props.sensorFourToday} color="orange" />
        </XYPlot>
      </div>
    );
  }
}

//returns JS object that we map to property of the state
const mapStateToProps = state => {
  return {
    sensorOneToday: state.sensorOneToday,
    sensorTwoToday: state.sensorTwoToday,
    sensorThreeToday: state.sensorThreeToday,
    sensorFourToday: state.sensorFourToday
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitData: () => dispatch(actions.initData())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodayStatistics);
