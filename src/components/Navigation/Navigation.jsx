import React, { Component } from 'react';
import styles from './Navigation.scss';
import Button from '../Button';
import classNames from '../../utilies/classnames';

class Navigation extends Component {

    render() {

        const className = classNames(
          styles.Navigation,
          this.props.dark && styles.DarkNavigation
        );

        const navItemClassName = classNames(
               styles.NavigationItem,
               this.props.dark && styles.DarkItem
             );

        const {action} = this.props;

        const itemsMarkup = this.props.items.map((item, index) => <span className={navItemClassName} key={index}> {item.name} </span>);


        const actionMarkup = action ? itemsMarkup : null;
        return (
            <div className={className}>
                {actionMarkup}
            </div>
        );
    }
}





export default Navigation;