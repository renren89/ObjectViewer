const initialState = {
  isFetching: false
}


export const tables = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return Object.assign({}, state, { isFetching: true });
    case 'RECEIVE_DATA':
      return Object.assign({}, state, { table: action.data, isFetching: action.isFetching })
    default:
      return state;
  }
}