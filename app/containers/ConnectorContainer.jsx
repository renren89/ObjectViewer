import React, { Component, Prototypes } from 'react';
import { connect } from 'react-redux';
import Connector from '../components/Connector';
import { fetchMetadata } from '../actions/connectorActions';
import MockTable from '../components/MockTable';

class ConnectorContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMetadata());
  }
  render() {
    const { connector, dispatch } = this.props;
    return (
      <div>
        <Connector connector={connector}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { connector } = state;
  return {
    connector
  }
}

export default connect(mapStateToProps)(ConnectorContainer);