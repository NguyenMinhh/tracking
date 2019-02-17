import React, { Component } from "react";
import { FormGroup, Label, Input, Button, Badge,Container, Row, Col } from 'reactstrap';
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
    if(event.key === 'Enter' && this.state.trackingId.toString().trim() !== ""){
      const codeReturn = await this.props.addTracking(this.props.flightId, this.props.customerId, this.state.trackingId);

      if(codeReturn.toString() === this.state.trackingId){
        this.setState({
          trackingId: ""
        })
      }
    }else if(event.key === 'Enter' && this.state.trackingId.toString().trim() === ""){
      window.alert("Vui lòng nhập mã vận đơn!");
    }
  }

  showWaybillInf = () => {
    history.push('/waybill-check');
  }

  createNewFlightId = () => {
    history.push('/create-flight-id');
  }

  backToHomePage = () => {
    history.push('/');
  }

  render(){
    return(
      <Container>
        <h1 style={{marginLeft : 'auto', marginRight: 'auto', textAlign : 'center'}}>
          <Badge color="light">Scan</Badge>
        </h1>
        <h4>Mã Chuyến bay: {this.props.flightId}</h4>

        <Row>
          <Col xs="2">
            <Label for="Customer">Mã khách hàng:</Label>
          </Col>
          <Col xs="9">
            <CustomerSelect data={this.state.customerData}/>
          </Col>
        </Row>

        <Row>
          <Col xs="2">
            <Label for="TrackingCode">Tracking:</Label>
          </Col>

          <Col xs="9">
            <Input id="trackId" placeholder="Mã tracking"
                   onChange={this.onChangeTrackingId} value={this.state.trackingId}
                   onKeyPress={this.handleScanFinished}/>
          </Col>
        </Row>

        <div style={{marginLeft : 'auto', marginRight: 'auto', textAlign : 'center', marginTop: '10%'}}>
          <Button color="primary" onClick={() => this.backToHomePage()}>Trở về trang chủ</Button>{' '}
          <Button color="primary" onClick={() => this.createNewFlightId()}>Tạo mới chuyến bay</Button>{' '}
          <Button color="primary" onClick={() => this.showWaybillInf()}>Kiểm tra vận đơn</Button>
        </div>
      </Container>
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
