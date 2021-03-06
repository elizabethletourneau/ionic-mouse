import React, { Component } from 'react';
import styles from './Heading.scss';

export default function Heading({ element: Element = 'h2', children }) {
    return <Element className={styles.Heading}>{children}</Element>;
}