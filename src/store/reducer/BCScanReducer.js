import {BCSCAN} from '../Constant'
const initialState = {
  flightId : "",
  customerId : "",
}

const barcodeScanReducer = (state = initialState, action) => {
  switch (action.type) {
    case BCSCAN.CREATE_FLIGHT_ID:
      return {
        ...state,
        flightId : action.data
      }

    case BCSCAN.SELECT_CUSTOMER_ID:
      return {
        ...state,
        customerId : action.data
      }

    default:
      return state;
    }
  }

export default barcodeScanReducer;
