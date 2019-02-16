import React, { Component } from "react";
import TrackingTable from '../../components/trackingTable/tracking-table';
import { connect } from 'react-redux';
import * as FlightAction from '../../store/action/FlightIdAction/FlightAction';

class WaybillCheckingContainer extends Component {

  state = {
    flightId : "",
  }

  componentDidMount(){
    this.props.getAllWaybillData();
  }

  render(){
    return(
      <div>
        <h1>Danh sách tracking</h1>
        <TrackingTable lstData={this.props.lstTracking}/>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lstTracking: state.BCScanReducer.lstTracking
  };
}

const dispatchToProps = dispatch => {
  return {
    getAllWaybillData : () => dispatch(FlightAction.getAllWaybillData()),
  };
}

export default connect(mapStateToProps,dispatchToProps)(WaybillCheckingContainer);
