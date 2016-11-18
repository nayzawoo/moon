import * as types from '../actions/collections'

const INITIAL_STATE = {
  cols: [],
  error: null,
  loading: false
}

export default function(state = INITIAL_STATE, action)  {
  switch(action.type) {
    case types.FETCH_COLS_SUCCESS:
      return {
        ...state,
        cols: action.payload,
        error: null,
        loading: false
      }
    default:
      return state
  }
}
