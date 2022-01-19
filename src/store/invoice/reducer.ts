import { DispatchProps } from 'interfaces'
import { ADD } from './action-types'

const initialState = {
  invoice: {
    id: '###',
    date_creation: '0.0.2022',
    amount: '$$$',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    plan: 'Super Dorado',
    planActive: false,
  },
}

const InvoiceReducer = (state = initialState, { type, payload }: DispatchProps) => {
  switch (type) {
    case ADD:
      return { ...state, ...{ invoice: payload } }
    default:
      return state
  }
}

export default InvoiceReducer
