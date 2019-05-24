import React, { Component } from 'react';
import styles from './Layout.scss';
import Navigation from '../Navigation';

class Layout extends Component {



    render() {
      const  {navigation, items, dark, url} = this.props;

        const navigationMarkup = navigation ? (
          <Navigation
            url={
              url
            }
            dark
            action
            items={items}
          />
        ) : null;
        return (
            <div className={styles.Container}>
                {navigationMarkup}
               {this.props.children}
            </div>
        );
    }
}

export default Layout;