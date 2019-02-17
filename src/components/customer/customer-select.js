import CreatableSelect from "react-select/lib/Creatable";
import React, {Component} from 'react';
import {connect} from 'react-redux';


class CustomerSelect extends Component {
  state = {
    selectedOption: null,
  }

  componentDidMount(){
    this.props.onChangeCustomerOfProduct("EMPTY_CUSTOMER");
  }

  handleChange = (selectedOption) => {
    if(selectedOption){
      this.props.onChangeCustomerOfProduct(selectedOption.name);
    }else{
      this.props.onChangeCustomerOfProduct("EMPTY_CUSTOMER");
    }
    document.getElementById("trackId").focus();
  }

  onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    switch (event.key) {
      case 'Enter':
        document.getElementById("trackId").focus();
        break;
        
      default:
        break;
    }
  }

  render() {
    return (
      <CreatableSelect
        isClearable
        isCreatable={true}
        placeholder={'Chọn khách hàng'}
        options={this.props.data}
        onChange={this.handleChange}
        onKeyDown={this.onKeyDown}
        getOptionLabel={option => option.name}
        getOptionValue={option => option.name}
      />

    );
  }
}

const dispatchToProps = dispatch => {
  return {
		onChangeCustomerOfProduct : (id) => dispatch({type: 'BCSCAN_SELECT_CUSTOMER_ID', data : id }),
  };
}

export default connect(null, dispatchToProps)(CustomerSelect);
