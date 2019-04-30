import {SIGNUP_USER, SIGNUP_ERRORS} from '../constants'
import axios from 'axios'

const baseURL = 'http://localhost:5000/api/register'

const signUpUser = data => ({
  type: SIGNUP_USER,
  data
})

const signupErrors = errors => ({
  type: SIGNUP_ERRORS,
  errors
})

export const registerUser = userData => {
  return async dispatch => {
    try {
      console.log('+++++++', userData)
      await axios.post(baseURL, userData)
      dispatch(signUpUser(userData))
    } catch (error) {
      console.log(error.response)
      dispatch(signupErrors(error.response.data.error))
    }
  }
}
