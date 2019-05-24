import React, { Component } from 'react';
import styles from './Navigation.scss';
import {Logo, Item} from './components';
import classNames from '../../utilies/classnames';



class Navigation extends Component {

    render() {

        const className = classNames(
          styles.Navigation,
          this.props.dark && styles.DarkNavigation
        );


        const {action, url, dark} = this.props;

        const logoMarkup = url ? <Logo url={url}/> : null;

        const itemsMarkup = this.props.items.map((item, index) =>
        <Item dark={dark} key={index} item={item}></Item>

    );


        const actionMarkup = action ? itemsMarkup : null;
        return (
          <div className={className}>
            {logoMarkup}
            {actionMarkup}
          </div>
        );
    }
}





export default Navigation;