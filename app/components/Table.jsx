import React, { Component, Prototypes } from 'react';
import uuid from 'node-uuid';
import Column from './Column';
import { styler } from '../utils/styler'

export default class Table extends Component {
  render() {
    const { table } = this.props;
    return (
      <table className={styler('table')} >
        <thead style={{align: 'center'}}>
          <tr>
            <th className={styler('th')} >Column Name</th>
            <th>Type</th>
            { table.columns[0].data ? <th>Data</th> : null }
          </tr>
        </thead>
        <tbody>
          {
            table.columns.map(column => <Column key={uuid.v4()} column={column} partitionKeys={table.partitionKeys} />)
          }
        </tbody>
      </table>
    );
  }
}