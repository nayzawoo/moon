import { combineReducers } from 'redux'
import DatabaseReducer from './databases'

const rootReducer = combineReducers({
  db: DatabaseReducer
})

export default rootReducer
