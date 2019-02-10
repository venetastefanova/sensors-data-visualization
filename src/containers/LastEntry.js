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

class LastEntry extends Component {
  state = {
    useCanvas: false
  };
  componentDidMount() {
    this.props.onInitData();
  }

  render() {
    const labelData = this.props.entries.map((d, idx) => ({
      x: d.x,
      y: Math.max(this.props.entries[idx].y)
    }));
    const { useCanvas } = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;

    return (
      <div>
        <XYPlot xType="ordinal" width={600} height={600} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries
            className="vertical-bar-series-example"
            data={this.props.entries}
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
    entries: state.entries // comes from redux
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitData: () => dispatch(actions.initData())
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(LastEntry);
