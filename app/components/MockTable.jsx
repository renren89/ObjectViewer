import React, { Component, Prototypes } from 'react';

export default class MockTable extends Component {
  render() {
    return (
      <table>
        <thead style={{float: 'left'}}>
          <tr>
            <th>Column Name</th>
            <th>Type</th>
            <th>Data</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>Name</td>
            <td>text</td>
            <td>data</td>
            <td>
              <button>x</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}