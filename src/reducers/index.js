import {combineReducers} from 'redux'
import registerUser from './registerUser'

export default combineReducers({
  user: registerUser
})