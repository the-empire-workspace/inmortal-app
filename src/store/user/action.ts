import { actionObject } from '@utils'
import { SET_PROFILE } from './action-types'

export const setProfile = (payload: any) => actionObject(SET_PROFILE, payload)
