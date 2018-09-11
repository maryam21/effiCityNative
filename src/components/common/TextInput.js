import React from 'react';
import { Container, Content, Item, Input } from 'native-base';

const TextInput = (props) => {
  return (
    <Container>
      <Content>
        <Item>
          <Input
            placeholder={props.placeholder}
            onChangeText={props.onValueChange}
            value={props.value}
          />
        </Item>
      </Content>
    </Container>
  );
}

export default TextInput;
