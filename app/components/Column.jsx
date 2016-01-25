import React, { Component, Prototypes } from 'react';
import { parseType } from '../utils/parseType';
import { styler } from '../utils/styler';
export default class Column extends Component {
  componentDidMount() {
    console.log(
    this.props.partitionKeys
    );
  }
  render() {
    const { column, partitionKeys } = this.props;
    return (
      <tr style={partitionKeys.filter(keys => {
        if (keys.name === column.name) {
          return { backgroundColor: '#00BCD4' }
        }; 
      })}

      >
        <td className={styler('td')}>{column.name}</td>
        <td>{parseType(column.type.code)}</td>

      </tr>
    );
  }
}