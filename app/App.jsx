import React, { Component } from 'react';
import ConnectorContainer from './containers/ConnectorContainer';
import TableContainer from './containers/TableContainer';
import MockTableContainer from './containers/MockTableContainer';


export default class App extends Component {
  render() {
    return (
      <div>
        <ConnectorContainer />
        <div style={{ display: 'inline-block' }}>
          <TableContainer />
          <MockTableContainer />
        </div>
      </div>
    );
  }
}