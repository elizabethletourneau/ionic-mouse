import React, { Component } from 'react';
import styles from "./Item.scss";
import classNames from "../../../../utilies/classnames";

 class Item extends Component {
 render() {
    const {name, index, url} = this.props.item;

    const navItemClassName = classNames(
      styles.NavigationItem,
      this.props.dark && styles.DarkItem
    );

 return (
   <a href={url} className={navItemClassName} key={index}>
       {name} <span className={styles.animation} />
   </a>
 );
}
}
export default Item;
