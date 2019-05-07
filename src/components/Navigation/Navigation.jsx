import React, { Component } from 'react';
import styles from './Navigation.scss';
import Button from '../Button';

class Navigation extends Component {

    renderItems() {
        const {items} = this.props;
        if (items == null){
            return
        }
        return items.map((item, index) =>  <span className={styles.NavigationItem} key={index}> {item.name} </span>);
    }



    render() {


        const {action} = this.props;
        
        const itemsMarkup = this.renderItems();

        const actionMarkup = action ? itemsMarkup : null;
        return (
            <div className={styles.Navigation}>
                {actionMarkup}
            </div>
        );
    }
}





export default Navigation;