import { actionObject } from '@utils'
import { SIGNIN, SIGNUP } from './action-types'

export const signin = (payload: any) => actionObject(SIGNIN, payload)
export const signup = (payload: any) => actionObject(SIGNUP, payload)
