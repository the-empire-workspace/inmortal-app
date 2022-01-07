import { DispatchProps } from 'interfaces'
import { SET_PROFILE } from './action-types'

const initialState = {
  profile: {},
}

const UserReducer = (
  state = initialState,
  { type, payload }: DispatchProps,
) => {
  switch (type) {
    case SET_PROFILE:
      return { ...state, ...{ profile: payload } }
    default:
      return state
  }
}

export default UserReducer
