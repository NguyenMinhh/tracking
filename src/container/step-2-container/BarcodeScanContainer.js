import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import history from '../../history';
import * as FlightAction from '../../store/action/FlightIdAction/FlightAction';
import CustomerSelect from '../../components/customer/customer-select';

const test = [{label: "KH1", value: "KH1"},{label: "KH2", value: "KH2"}]

class BarcodeScanContainer extends Component {

  constructor(props){
    super(props);
    if(!this.props.flightId || this.props.flightId.trim() === "" ){
      history.push('/create-flight-id');
    }
  }

  state = {
    trackingId : "",
  }

  onChangeTrackingId = (e) => {
    this.setState({
      trackingId: e.target.value
    })
  }

  handleScanFinished = (event) => {
    if(event.key == 'Enter'){
      console.log('enter press here! ')
    }
  }

  render(){
    return(
      <div>
        <h1>Scan:</h1>
        <h3>Mã Chuyến bay: {this.props.trackingId}</h3>
        <CustomerSelect data={test}/>

        <FormGroup>
          <Label for="exampleEmail">Mã chuyến bay:</Label>
          <Input id="TrackId" placeholder="Mã tracking"
                 onChange={this.onChangeTrackingId} value={this.state.trackingId}
                 onKeyPress={this.handleScanFinished}/>
        </FormGroup>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    flightId: state.BCScanReducer.flightId,
    customerId: state.BCScanReducer.customerId,
  };
}

const dispatchToProps = dispatch => {
  return {

  };
}

export default connect(mapStateToProps,dispatchToProps)(BarcodeScanContainer);
