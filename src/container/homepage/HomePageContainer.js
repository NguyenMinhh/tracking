import React, { Component } from "react";
import { Button } from 'reactstrap';
import history from '../../history';

const style = {
  width : '60%',
  margin : '0 auto 0 auto',
  marginTop : '8%'
}
class HomePageContainer extends Component {

  createTracking = () => {
    history.push('/create-flight-id');
  }

  render(){
    return(
      <div style={style}>
        <Button color="primary" size="lg" block onClick={() => this.createTracking()}>Tạo tracking</Button>
        <Button color="primary" size="lg" block>Tạo barcode</Button>
        <Button color="primary" size="lg" block>Tra cứu đơn hàng</Button>
      </div>
    )
  }
}

export default HomePageContainer;
