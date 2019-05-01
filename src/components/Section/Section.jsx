import React, { Component } from 'react';
import styles from './Section.scss';


class Section extends Component {
    render() {
        return (
            <div className={styles.Section}>
                {this.props.children}
            </div>
        );
    }
}

export default Section;