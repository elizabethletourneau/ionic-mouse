
import React, { Component } from 'react';
import styles from './Button.scss'

class Button extends Component {

    render() {
        return (
            <button className={styles.Button}>{this.props.children}</button>
        );
    }
}

export default Button;
