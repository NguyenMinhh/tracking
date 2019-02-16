import CreatableSelect from "react-select/lib/Creatable";
import React, {Component} from 'react';
import {connect} from 'react-redux';


class CustomerSelect extends Component {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    if(selectedOption){
      this.props.onChangeCustomerOfProduct(selectedOption._id);
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
        getOptionLabel={option => option._id}
        getOptionValue={option => option.name}
        getNewOptionData={(inputValue, optionLabel) => ({
          _id: optionLabel,
          name: inputValue,
          __isNew__: true
        })}
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
