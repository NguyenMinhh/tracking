import {BCSCAN} from '../Constant'
const initialState = {
  flightId : "",
}

const barcodeScanReducer = (state = initialState, action) => {
  switch (action.type) {
    case BCSCAN.CREATE_FLIGHT_ID:
      return {
        ...state,
        flightId : action.data
      }

    default:
      return state;
    }
  }

export default barcodeScanReducer;
