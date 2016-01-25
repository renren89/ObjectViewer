import React, { Component, Prototypes } from 'react';
import MockTable from '../components/MockTable';
import MockOptions from '../components/MockOptions';

export default class MockTableContainer extends Component {
  render() {
    return (
      <div style={{ float: 'left' }} >
        <MockOptions />
        <MockTable />
      </div>
    );
  }
}