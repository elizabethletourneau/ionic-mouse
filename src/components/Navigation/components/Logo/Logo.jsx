import React, { Component } from "react";
import styles from './Logo.scss';

function Logo({url}) {
    return (
      <div className={styles.LogoContainer}>
        <img src={url} />
      </div>
    );
}
export default Logo;