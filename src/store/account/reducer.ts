import { DispatchProps } from 'interfaces'
import { SIGNIN,SIGNUP,LOGOUT } from './action-types'

const initialState = {
  isAuth: false,
  user: {
    name: null,
    last_name: null,
    email: null,
    password: null,
    email_contact:null,
    religion:null,
    biography:null
  },
}

const AccountReducer = (
  state = initialState,
  { type, payload }: DispatchProps,
) => {
  switch (type) {
    case SIGNIN:
      return { ...state, ...{ user: payload, isAuth: true } }
    case LOGOUT:
      return { ...state, ...{ user: payload, isAuth: false } }
    case SIGNUP:
      return { ...state, ...{ user: payload, isAuth: true } }
    default:
      return state
  }
}

export default AccountReducer
