import { combineReducers } from 'redux'
import account from './account/reducer'
import user from './user/reducer'

const reducers = combineReducers({
  account,
  user,
})

export default reducers
