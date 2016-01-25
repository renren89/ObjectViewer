const initialState = {
  keyspace: '',
  contactPoint: '127.0.0.1'
}
// const metadata = (state = {}, action) => {
//   switch (action.type) {
//     case 'GET_METADATA':
//       return Object.assign({}, state, action.payload);
//     default:
//       return state;
//   }
// }
export const connector = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_METADATA':
      return Object.assign({}, state, { metadata: action.payload });
    default:
      return state;
  }
}

