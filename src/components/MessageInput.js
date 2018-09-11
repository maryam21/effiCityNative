import React from 'react';
import { Container, Content, Item, Input } from 'native-base';

const MessageInput = (props) => {
        return (
            <Container>
                <Content>
                    <Item>
                        <Input
                            placeholder="Input your message"
                            onChangeText={props.onChangeText}
                            value={props.text}
                        />
                    </Item>
                </Content>
            </Container>
        );
}

export default MessageInput;