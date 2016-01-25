import uuid from 'node-uuid';

export const CREATE_KEYSPACE = 'CREATE_KEYSPACE';
export const CREATE_TABLE = 'CREATE_TABLE';
export const CREATE_COLUMN = 'CREATE_COLUMN';

const createColumn = (payload) => {
  return {
    type: CREATE_COLUMN,
    payload
  }
}
const createTable = (payload) => {
  return {
    type: CREATE_TABLE,
    payload
  }
}
const createKeyspace = (payload) => {
  return {
    type: CREATE_KEYSPACE,
    payload
  }
}
export const generateKeyspace = (name) => {
  let keyspace = {
    name: name,
    id: uuid.v4(),
    type: 'keyspace',
    editing: false
  }
  return dispatch => dispatch(createKeyspace(keyspace));
}
export const generateTable = (name) => {
  let table = {
    name: name,
    id: uuid.v4(),
    type: 'table',
    editing: false
  }
  return dispatch => dispatch(createTable(table));
}

export const generateColumn = (payload) => {
  let column = Object.assign({}, payload, { id: uuid.v4(), editing: false})

  return dispatch => dispatch(createColumn(column))
}