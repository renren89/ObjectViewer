import { combineReducers } from 'redux';
import { connector } from './connectorReducer';
import { tables } from './tableReducer';

export const rootReducer = combineReducers({
  connector,
  tables
})