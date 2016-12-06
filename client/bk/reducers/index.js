import { combineReducers } from 'redux'
import DatabasesReducer from './databases'
import CollectionsReducer from './collections'

const rootReducer = combineReducers({
  db: DatabasesReducer,
  cols: CollectionsReducer
})

export default rootReducer
