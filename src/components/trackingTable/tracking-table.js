import React from 'react';
import { Table } from 'reactstrap';

const trackingTable = (props) => {
  let lstData = [];
  if(props.lstData){
    let _flightId = "";
    let _customerId = "";

    lstData = props.lstData.map(data => {
      let flightIdData = "";
      let customerIdData = ""
      if(_flightId !== data.flightId){
        _flightId = data.flightId;
        flightIdData = data.flightId;
      }
      if(_customerId !== data.customerId){
        _customerId = data.customerId;
        customerIdData = data.customerId;
      }

      return (
        <tr key={data._id} size="sm">
          <td>{flightIdData}</td>
          <td>{customerIdData}</td>
          <td>{data.barcode}</td>
        </tr>
      )
    })
  }

  return (
    <Table hover>
      <thead>
        <tr>
          <th>Chuyến bay</th>
          <th>Khách hàng</th>
          <th>Tracking</th>
        </tr>
      </thead>
      <tbody>
        {lstData}
      </tbody>
    </Table>
  );
}

export default trackingTable;
