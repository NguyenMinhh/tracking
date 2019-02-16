import CreatableSelect from "react-select/lib/Creatable";
import React, {Component} from 'react';
import {connect} from 'react-redux';


class CustomerSelect extends Component {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    if(selectedOption){
      this.props.onChangeCustomerOfProduct(selectedOption.name);
    }else{
      this.props.onChangeCustomerOfProduct("EMPTY_CUSTOMER");
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
