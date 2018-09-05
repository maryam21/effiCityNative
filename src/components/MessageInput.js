import React, { Component } from 'react';
import { TextInput } from 'react-native';

class MessageInput extends Component {
    state = {
        text: ''
    };

    render() {
        return (
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
            />
        );
    }
}

export default MessageInput;