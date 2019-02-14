import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import history from '../../history';
import * as FlightAction from '../../store/action/FlightIdAction/FlightAction';

class BarcodeScanContainer extends Component {

  constructor(props){
    super();
    if(!this.props.flightId || this.props.flightId.trim() === "" ){
      history.push('/create-flight-id');
    }
  }

  render(){
    return(
      <div>
        <h1>Scan:</h1>


      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    flightId: state.BCScanReducer.flightId
  };
}

const dispatchToProps = dispatch => {
  return {

  };
}

export default connect(mapStateToProps,dispatchToProps)(BarcodeScanContainer);
