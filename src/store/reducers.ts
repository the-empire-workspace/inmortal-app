import { combineReducers } from 'redux'
import account from './account/reducer'
import invoice from './invoice/reducer'
import user from './user/reducer'

const reducers = combineReducers({
  account,
  user,
  invoice,
})

export default reducers