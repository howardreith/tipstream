import _ from 'lodash'

import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
      // Take the big object produced by mapkeys and put them all
      // in our new object with the keys being their ids
    case DELETE_STREAM:
      return _.omit(state, action.payload)
      // The payload is the id itself as we set it in actions/index.js
    default:
      return state
  }
}
