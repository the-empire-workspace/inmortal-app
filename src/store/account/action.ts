import { actionObject } from '@utils'
import { SIGNIN, SIGNUP, LOGOUT } from './action-types'

export const signin = (payload: any) => actionObject(SIGNIN, payload)
export const signup = (payload: any) => actionObject(SIGNUP, payload)
export const logout = (payload: any) => actionObject(LOGOUT, payload)
