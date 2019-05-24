import React, { Component } from 'react';
import styles from './Card.scss';
 class Card extends Component {
 render() {
    const {
      children,
      title,
      subdued,
      sectioned,
      actions
    } = this.props;

    const headerMarkup = title || actions ? <div className={styles.Header}>Hello I am header </div> : null;
 return (
 <div className={styles.Card}>
     {headerMarkup}
     {children}
 </div>
);
}
}
export default Card;
