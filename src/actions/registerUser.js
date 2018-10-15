import axios from 'axios'

import { REGISTER_USER, LOG_ERRORS } from './constants'

const baseURL = 'http://localhost:5000/api'
const registerUser = (userData, history) => async dispatch => {
  try { 
    await axios.post(baseURL, userData)
    dispatch({
      type: REGISTER_USER,
      payload: userData
    })
    history.push('/login')
   }
  catch (error){
    dispatch({
      type: LOG_ERRORS,
      payload: error.response.data.error
    })
  }
}

export default registerUser 