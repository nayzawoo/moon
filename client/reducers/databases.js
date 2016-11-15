import * as types from '../actions/databases'

const INITIAL_STATE = {
  dbs: [],
  error: null,
  loading: false
}

export default function(state = INITIAL_STATE, action)  {
  switch(action.type) {
    case types.FETCH_DBS_SUCCESS:
      return {
        ...state,
        dbs: action.payload,
        error: null,
        loading: false
      }
    default:
      return state;
  }
}
