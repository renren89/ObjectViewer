import React, { Component, Prototypes } from 'react';

export default class MockOptions extends Component {
  render() {
    const { keyspaceInput, tableInput, handleSearch, keyspaceValue, tableValue, keyInput, onEnterKey } = this.props;
    return (
      <table>
        <tbody>
        <tr>
          <th>Keyspace Name</th>
          <th>
            <input onChange={e => keyspaceInput(e)} />
          </th>
        </tr>
        <tr>
          <th>Table </th>
          <th>
            <input onKeyPress={e => onEnterKey(e)} onChange={e => tableInput(e)} />
          </th>
        </tr>
        <tr>
          <th>Key(optional)</th>
          <th>
            <input onChange={e => keyInput(e)} />
          </th>
        </tr>
        <tr>
          <td style={{ float: 'left' }} >
            <button onClick={handleSearch}>Search</button>
          </td>
        </tr>
      </tbody>
    </table>
    );
  }
}