import Select, { components } from 'react-select';
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

const Option = (props) => {
  return (
      <Fragment>
        <components.Option {...props}>
          {props.label}
        </components.Option>
      </Fragment>

  );
};

class CustomerSelect extends Component<*, State> {
  state = {
    selectedOption: null,
  }

  componentDidMount(){
    if(this.props.defaultValue !== undefined &&
        this.props.defaultValue !== '' && this.props.defaultValue !== null){
        this.setState({ selectedOption : this.props.defaultValue});
    }
  }

  handleChange = (selectedOption) => {
    if(selectedOption.length === 0){
      this.setState({ selectedOption : null });
      this.props.onChangeCustomerOfProduct("UNKNOWN");
    }else{
      this.setState({ selectedOption });
      this.props.onChangeCustomerOfProduct(selectedOption.value);
    }
  }

  ValueContainer = ({ children, ...props }) => {
    return(
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    )
  };

  render() {
    const { selectedOption } = this.state;
    const ValueContainer = this.ValueContainer;

    return (
      <Select
        components={{ Option , ValueContainer }}
        value={selectedOption}
        placeholder={'Chọn khách hàng'}
        onChange={this.handleChange}
        options={this.props.data}
        styles={{
          valueContainer: (base) => ({ ...base, background: '#fff', color: 'white', width: '100%' }),
        }}
      />
    );
  }
}

const dispatchToProps = dispatch => {
  return {
		onChangeCustomerOfProduct : (value) => dispatch({type: 'BCSCAN_SELECT_CUSTOMER_ID', data : value }),
  };
}

export default connect(null, dispatchToProps)(CustomerSelect);
