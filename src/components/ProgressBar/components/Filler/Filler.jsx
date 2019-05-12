import React, { Component } from "react";
import { classNames } from "../../../../utilies/classnames";
import styles from "./Filler.scss";
class Filler extends Component {
  render() {
    return (
      <div
        className={styles.Filler}
        style={{ width: `${this.props.percentage}%` }}
      />
    );
  }
}

export default Filler;
