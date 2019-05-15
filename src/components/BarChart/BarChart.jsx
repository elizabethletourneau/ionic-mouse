import React, { Component } from "react";
import styles from "./BarChart.scss";
import { Bar } from "./components";

class BarChart extends Component {
  render() {
    const information = [
      { label: "my label", percentage: 10 },
      { label: "Hello", percentage: 33 },
      { label: "another label", percentage: 100 }
    ];

    const barMarkup = information.map(data => {
      return <Bar data={data} />;
    });
    return <div className={styles.BarChart}>{barMarkup}</div>;
  }
}
export default BarChart;
