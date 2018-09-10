import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Item, Input } from 'native-base';

const MaxPriceInput = (props) => {
  return (
    <Container>
      <Content>
        <Item>
          <Input
            placeholder="Input max price"
            onChangeText={props.onValueChange}
            value={props.value}
          />
        </Item>
      </Content>
    </Container>
  );
}

MaxPriceInput.propTypes = {
  value: PropTypes.number
};

export default MaxPriceInput;
