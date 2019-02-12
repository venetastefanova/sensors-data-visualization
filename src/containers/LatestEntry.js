import React, { Component } from "react";
import "../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from "react-vis";
import * as actions from "../store/actions/actions";
import { connect } from "react-redux";

class LatestEntry extends Component {
  state = {
    useCanvas: false
  };
  componentDidMount() {
    this.props.onInitData();
  }

  render() {
    const labelData = this.props.entry.map((d, idx) => ({
      x: d.x,
      y: Math.max(this.props.entry[idx].y)
    }));
    const { useCanvas } = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div className="LatestEntry">
        <h2>Latest entry from the last hour</h2>
        <XYPlot xType="ordinal" width={450} height={500} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries
            className="vertical-bar-series-example"
            data={this.props.entry}
          />
          <LabelSeries data={labelData} getLabel={d => d.x} />
        </XYPlot>
      </div>
    );
  }
}

//returns JS object that we map to property of the state
const mapStateToProps = state => {
  return {
    entry: state.latestEntry // comes from redux
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
)(LatestEntry);
