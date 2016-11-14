import { combineReducers } from 'redux'
import DatabaseReducer from './databases'

const rootReducer = combineReducers({
  dbs: DatabaseReducer
})

export default rootReducer
