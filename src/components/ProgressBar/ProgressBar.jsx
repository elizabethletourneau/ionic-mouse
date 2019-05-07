import React, { Component } from 'react';
import Filler from './components';
import styles from './ProgressBar.scss'

class ProgressBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {percentage} = this.props;

        return (
            <div className={styles.Container}>
            <div className={styles.ProgressBar}>
                <Filler percentage={percentage}/>
            </div>
                <div>
                    {percentage}%
                </div>
            </div>
        );
    }
}

export default ProgressBar;