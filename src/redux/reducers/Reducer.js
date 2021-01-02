import { combineReducers } from 'redux';
import { authorizationReducer } from './authorizationReducer';
import {tableReducer} from './tableReducer';
import todos from './todos'
import visibilityFilter from './visibilityFilter'


const mainReducer = combineReducers({
  tableReducer, authorizationReducer, todos, visibilityFilter
})

export default mainReducer;