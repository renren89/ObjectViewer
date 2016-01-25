import React, { Component, Prototypes } from 'react';
import Metadata from './Metadata';

export default class Connector extends Component {
  render() {
    const { connector, handleClick } = this.props;
    return (
      <div>
        {connector.metadata ? <Metadata metadata={connector.metadata} /> : null}
      </div>
    );
  }
}