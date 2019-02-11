import React, { Component } from "react";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis
} from "react-vis";
import * as actions from "../store/actions/actions";
import { connect } from "react-redux";

class TodayStatistics extends Component {
  render() {
    return (
      <div>
        <XYPlot height={1000} width={1000}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="EET + 02:00" />
          <YAxis title="Value" />
          <LineSeries data={this.props.sensorOneToday} />
          <LineSeries data={this.props.sensorTwoToday} />
          <LineSeries data={this.props.sensorThreeToday} />
          <LineSeries data={this.props.sensorFourToday} />
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
