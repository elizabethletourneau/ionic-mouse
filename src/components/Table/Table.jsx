import React, { Component } from 'react';
import styles from './Table.scss';

class Table extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   data = this.props.data
    // }
  }
    render() {

      const data = {
      headers: [
        "Push Ups",
        "Design System",
        "Other"
      ],
    values: [
      [24, 25, 27],
      [60, 20, 40],
      [1, 2, 3]
      ]
    };

      const headers = data.headers.map((header)=>{
        return <th key={header}>{header}</th>;
      });

      const values = data.values.map((value, index )=> {
        return <tr key={index}>{value.map((item, index)=>{
          return <td key={index}>{item}</td>
        })}</tr>;
      });

        return (
          <table style={{ width: "100%" }}>
            <thead>
              <tr>{headers}</tr>
            </thead>
            <tbody>{values}</tbody>
          </table>
        );
    }
}

export default Table;