import { DispatchProps } from 'interfaces'
import { ADD } from './action-types'

const InvoiceReducer = (
  state = {},
  { type, payload }: DispatchProps,
) => {
  switch (type) {
    case ADD:
      return { ...state, ...{invoice:payload} }
    default:
      return state
  }
}

export default InvoiceReducer
