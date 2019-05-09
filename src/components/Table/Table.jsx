import React, { Component } from 'react';
import styles from './Table.scss';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: this.props.data.headers,
      values: this.props.data.values
    };
  }

  totalHeaders() {
    const { values, headers } = this.state;

    const valueLengths = values.map(list => {
      return list.length;
    });
    const maxLength = Math.max(...valueLengths);
    return maxLength > headers.length
      ? Math.ceil(maxLength / headers.length)
      : 1;
  }

  totalColumns(items) {
    const { headers } = this.state;
    return items.length < headers.length ? Math.ceil(headers.length/items.length) : 1;
  }

  render() {
    const { headers, values } = this.state;

    const headerMarkup = headers.map(header => {
      return (
        <th colSpan={this.totalHeaders()} key={header}>
          {header}
        </th>
      );
    });

    const valueMarkup = values.map((value, index) => {
      return (
        <tr key={index}>
          {value.map((item, index) => {
            return (
              <td colSpan={this.totalColumns(value)} key={index}>
                {item}
              </td>
            );
          })}
        </tr>
      );
    });

    return (
      <table style={{ width: "100%" }}>
        <thead>
          <tr>{headerMarkup}</tr>
        </thead>
        <tbody>{valueMarkup}</tbody>
      </table>
    );
  }
}



export default Table;