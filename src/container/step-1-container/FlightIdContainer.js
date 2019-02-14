import React, { Component } from "react";
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import * as FlightAction from '../../store/action/FlightIdAction/FlightAction';

class FlightIdContainer extends Component {

  state = {
    flightId : "",
  }

  onChangeFlightId = (e) => {
    this.setState({
      flightId: e.target.value
    })
  }

  render(){
    return(
      <div>
        <h1>Tạo chuyến bay:</h1>
        <FormGroup>
          <Label for="exampleEmail">Mã chuyến bay:</Label>
          <Input id="flightId" placeholder="Mã chuyến bay"
                 onChange={this.onChangeFlightId} value={this.state.flightId}/>
          <Button color="primary" onClick={() => this.props.createFlightId(this.state.flightId)}>Tạo</Button>
        </FormGroup>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  };
}

const dispatchToProps = dispatch => {
  return {
    createFlightId : (flightId) => dispatch(FlightAction.createFlightId(flightId)),
  };
}

export default connect(mapStateToProps,dispatchToProps)(FlightIdContainer);
