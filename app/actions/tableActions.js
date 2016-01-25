export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

const requestData = () => {
  return {
    type: REQUEST_DATA,
    isFetching: true
  }
};

const receiveData = (data) => {
  return {
    type: RECEIVE_DATA,
    isFetching: false,
    data
  }
}

const API = 'http://localhost:3000/cassandra'
export const fetchData = (queryParam) => {
  let request = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(queryParam)
  }

  return dispatch => {
    dispatch(requestData());

    return fetch(API + '/tables', request)
           .then(res => res.json())
           .then(data => dispatch(receiveData(data)))
  }
}