import * as types from '../actions/databases'

const INITIAL_STATE = {
  dbsList: {
    dbs: [],
    error: null,
    loading: false
  },
}

export default function(state = INITIAL_STATE, action)  {
  switch(action.type) {
    case types.FETCH_DBS_SUCCESS:
      return {...state,
        dbsList: {
          dbs: action.payload.data,
          error: null,
          loading: false
        }
      }
      break;
    default:
      return state;
  }
}
