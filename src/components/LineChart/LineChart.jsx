import React, { Component } from "react";
import styles from "./LineChart.scss";
import { Line } from "./components";

class LineChart extends Component {
  //   y = [10, 30, 20, 10, 30];

  render() {
    const data = [
      { x: 10, y: 30 },
      { x: 20, y: 10 },
      { x: 30, y: 30 },
      { x: 40, y: 20 },
      { x: 50, y: 50 },
      { x: 60, y: 10 }
    ];
    const lines = data.map(value => <Line y={value.y} />);

    return <div className={styles.Axis}>{lines}</div>;
  }
}

export default LineChart;
