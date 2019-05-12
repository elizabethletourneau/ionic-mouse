import React, { Component } from "react";
import styles from "./Line.scss";
import className from "../../../../utilies/classnames.jsx";

class Line extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: this.props.y,
      x: this.props.x
    };
  }
  render() {
    const { x, y } = this.state;
    return <div style={{ top: `${y}px` }} className={styles.Line} />;
  }
}

export default Line;
