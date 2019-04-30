import { SIGNUP_USER, SIGNUP_ERRORS } from '../actions/constants'
export default (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        data: action.data
      }
    case SIGNUP_ERRORS:
      return{
        ...state,
        errors: action.errors
      }
    default:
      return state
  }
}