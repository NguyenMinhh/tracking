import {BCSCAN} from '../../Constant'
import * as Service from '../../../common/common-service';
import history from '../../../history';

export const createFlightId = (flightId) => {
  return dispatch => {

    Service.postAPI('create-flight-id',
      { data: flightId },
      {}, dispatch, null)
     .then(response => {
       dispatch({type: BCSCAN.CREATE_FLIGHT_ID});
       history.push('/barcode-scan');
     })
     .catch(() => {});
  }
}
