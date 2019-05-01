import React, { Component } from 'react';
import styles from 'Layout.scss';

class Layout extends Component {



    render() {
        return (
            <div className={styles.Container}>
               {this.props.children} 
            </div>
        );
    }
}

export default Layout;