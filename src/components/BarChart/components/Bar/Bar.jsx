import React, { Component } from "react";
import c from "../../../../utilies/classnames";
import styles from "./Bar.scss";

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false
    };
  }
  componentWillMount() {
    this.onAnimate();
  }
  onAnimate() {
    setTimeout(() => {
      this.setState({ animate: !this.state.animate });
    }, 100);
  }

  increaseByOne;

  render() {
    return (
      <div className={styles.BarContainer}>
        <div className={styles.Label}>{this.props.data.label}</div>
        <div className={styles.BarWrapper}>
          <div
            style={{
              // flex: this.state.animate
              //   ? `0 ${this.props.data.percentage}%`
              //   : "0",
              "--bar-per": this.props.data.percentage + '%',
              color: 'black'
            }}
            className={styles.BarPercentage}
          />
        </div>
        <div className={styles.Stat}>{this.props.data.percentage}%</div>
      </div>
    );
  }
}
export default Bar;
