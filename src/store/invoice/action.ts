import { actionObject } from '@utils'
import { ADD } from './action-types'

export const add = (payload: any) => actionObject(ADD, payload)
