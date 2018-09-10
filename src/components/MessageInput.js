import React, { Component } from 'react';
import { Container, Content, Item, Input } from 'native-base';

class MessageInput extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Item>
                        <Input
                            placeholder="Input your message"
                            onChangeText={this.props.onChangeText}
                            value={this.props.text}
                        />
                    </Item>
                </Content>
            </Container>
        );
    }
}

export default MessageInput;