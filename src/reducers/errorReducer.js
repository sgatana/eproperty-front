import { LOG_ERRORS } from '../actions/constants'

export default (state = {}, action) => {
  switch (action.type) {
    case LOG_ERRORS:
      return action.payload
    default:
      return state
  }  
}