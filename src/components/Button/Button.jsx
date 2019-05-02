
import React, { Component } from 'react';
import styles from './Button.scss';
import classNames from '../../utilies/classnames';

class Button extends Component {

    render() {

        const { light } = this.props;
        const buttonClass = classNames( styles.Button, light && styles.LightButton);
        

        return (
            <button className={buttonClass}>{this.props.children}</button>
        );
    }
}

export default Button;
