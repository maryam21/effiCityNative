import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

export default class MaxPriceInput extends Component {
  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.props.onValueChange}
        value={this.props.value}
      />
    );
  }
}

MaxPriceInput.propTypes = {
  value: PropTypes.number
};
