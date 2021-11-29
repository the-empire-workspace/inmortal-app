import { DispatchProps } from 'interfaces'
import { SIGNIN,SIGNUP } from './action-types'

const initialState = {
  isAuth: false,
  user: {
    name: null,
    last_name: null,
    email: null,
    password: null,
    email_contact:null,
    religion:null,
  },
}

const AccountReducer = (
  state = initialState,
  { type, payload }: DispatchProps,
) => {
  switch (type) {
    case SIGNIN:
      return { ...state, ...{ user: payload, isAuth: true } }
    case SIGNUP:
      return { ...state, ...{ user: payload, isAuth: true } }
    default:
      return state
  }
}

export default AccountReducer
