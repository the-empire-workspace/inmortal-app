import { combineReducers } from 'redux'
import account from './account/reducer'
import invoice from './invoice/reducer'

const reducers = combineReducers({
  account,
  invoice,
})

export default reducers
