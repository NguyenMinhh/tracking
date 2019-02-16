import {BCSCAN} from '../../Constant'
import * as Service from '../../../common/common-service';
import history from '../../../history';

export const createFlightId = (flightId) => {
  return dispatch => {

    Service.postAPI('create-flight-id',
      { data: flightId },
      {}, dispatch, null)
     .then(response => {
       dispatch({type: BCSCAN.CREATE_FLIGHT_ID, data: response});
       history.push('/barcode-scan');
     })
     .catch(() => {});
  }
}

export const getCustomerData = () => {
  return async dispatch => {
    let lstCustomer = [];
    await Service.getAPI('get-customer',
      {}, dispatch, null)
     .then(response => {
       lstCustomer = response;
     })
     .catch(() => {});
     return lstCustomer;
  }
}

export const addTracking = (flightId, customerId, trackingId) => {
  return async dispatch => {
    let barcodeReturn = "";
    const _data = {
      flightId: flightId,
      customerId: customerId,
      barcode: trackingId
    }
    await Service.postAPI('scan',
      { data: _data },{}, dispatch, null)
     .then(response => {
       barcodeReturn = response;
     })
     .catch(() => {});
     return barcodeReturn;
  }
}
