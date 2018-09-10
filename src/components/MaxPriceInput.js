import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Item, Input } from 'native-base';

export default class MaxPriceInput extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Item>
            <Input 
              placeholder="Input max price"
              onChangeText={this.props.onValueChange}
              value={this.props.value}
             />
          </Item>
        </Content>
      </Container>
    );
  }
}

MaxPriceInput.propTypes = {
  value: PropTypes.number
};
