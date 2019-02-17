import React, { Component } from "react";
import { Button, Label, Input, Badge,Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import * as FlightAction from '../../store/action/FlightIdAction/FlightAction';

class FlightIdContainer extends Component {

  state = {
    flightId : "",
  }

  componentDidMount(){
    document.getElementById("flightId").focus();
  }

  onChangeFlightId = (e) => {
    this.setState({
      flightId: e.target.value
    })
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.props.createFlightId(this.state.flightId)
    }
  }

  render(){
    return(
      <Container>
        <h1 style={{marginLeft : 'auto', marginRight: 'auto', textAlign : 'center'}}><Badge color="light">TẠO CHUYẾN BAY</Badge></h1>

        <Row>
          <Col xs="auto"><Label for="Flight">Mã chuyến bay:</Label></Col>
          <Col xs="9"><Input id="flightId" placeholder="Mã chuyến bay"
                 onChange={this.onChangeFlightId} value={this.state.flightId}
                 onKeyPress={this.handleKeyPress}/></Col>
          <Col xs="auto">
            <Button color="primary" onClick={() => this.props.createFlightId(this.state.flightId)}>Tạo</Button>
          </Col>
        </Row>

      </Container>
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
