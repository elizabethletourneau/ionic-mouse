import React, { Component } from 'react';
import styles from './LineChart.scss';
import {Line}  from './components';

class LineChart extends Component {

  //   x = [10, 20, 30, 20, 40];
  //   y = [10, 30, 20, 10, 30];


    render() {
        return (
            <div className={styles.Axis}>
                <Line></Line>
            </div>
        );
    }
}

export default LineChart;