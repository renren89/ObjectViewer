export const GET_METADATA = 'GET_METADATA';

const getMetadata = (payload) => {
  return {
    type: GET_METADATA,
    payload
  }
}
export const fetchMetadata = () => {

  return dispatch => {
    return fetch('http://localhost:3000/cassandra/metadata', {header: {'Content-Type': 'application/json'}})
      .then(res => res.json())
      .then(data => dispatch(getMetadata(data[0])));
  }
}