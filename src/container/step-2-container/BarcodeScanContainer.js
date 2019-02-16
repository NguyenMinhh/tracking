import React, { Component } from "react";
import { FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import history from '../../history';
import * as FlightAction from '../../store/action/FlightIdAction/FlightAction';
import CustomerSelect from '../../components/customer/customer-select';


class BarcodeScanContainer extends Component {

  constructor(props){
    super(props);
    if(!this.props.flightId || this.props.flightId.trim() === "" ){
      history.push('/create-flight-id');
    }
  }

  state = {
    trackingId : "",
    customerData : [],
  }

  async componentDidMount(){
    if(this.props.flightId && this.props.flightId.trim() !== "" ){
      const _customerData = await this.props.getCustomerData();
      this.setState({
        customerData : _customerData
      });
    }
  }

  onChangeTrackingId = (e) => {
    this.setState({
      trackingId: e.target.value
    })
  }

  handleScanFinished = async (event) => {
    if(event.key === 'Enter'){
      const codeInp = event.target.value;
      const codeReturn = await this.props.addTracking(this.props.flightId, this.props.customerId, codeInp);
      if(codeReturn === codeInp){
        this.setState({
          trackingId: ""
        })
      }
    }
  }

  render(){
    return(
      <div>
        <h1>Scan:</h1>
        <h3>Mã Chuyến bay: {this.props.trackingId}</h3>
        <CustomerSelect data={this.state.customerData}/>

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
    getCustomerData : () => dispatch(FlightAction.getCustomerData()),
    addTracking : (flightId, customerId, trackingId) => dispatch(FlightAction.addTracking(flightId, customerId, trackingId)),
  };
}

export default connect(mapStateToProps,dispatchToProps)(BarcodeScanContainer);
