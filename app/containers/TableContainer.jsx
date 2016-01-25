import React, { Component, Prototypes } from 'react';
import { connect } from 'react-redux';
import TableSearch from '../components/TableSearch';
import Table from '../components/Table';

import { fetchData } from '../actions/tableActions';

let keyspaceName;
let tableName;
let keyName;
class TableContainer extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  keyspaceInput(e) {
    keyspaceName = e.target.value;
  }
  tableInput(e) {
    tableName = e.target.value;
  }
  keyInput(e) {
    keyName = e.target.value;
  }
  handleSearch() {
    this.props.dispatch(fetchData({
      keyspace: keyspaceName,
      table: tableName,
      key: keyName
    }));
  }
  handleEnterKey(e) {
    if (e.key === 'Enter') {
      this.handleSearch()
    }
  }

  render() {
    const { dispatch, tables } = this.props;
    return (
      <div style={{ float: 'right', marginLeft: '3em' }}>
        <TableSearch keyspaceInput={e => this.keyspaceInput(e)}
                     tableInput={e => this.tableInput(e)}
                     onEnterKey={e => this.handleEnterKey(e)}
                     keyInput={e => this.keyInput(e)}
                     handleSearch={this.handleSearch.bind(this)} />
        {
          tables.table ? <Table table={tables.table} /> : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { tables } = state;
  return {
    tables
  }
}
export default connect(mapStateToProps)(TableContainer);