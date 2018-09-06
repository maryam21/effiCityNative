import React, { Component } from 'react';
import { TextInput } from 'react-native';

class MessageInput extends Component {
    render() {
        return (
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={this.props.onChangeText}
                value={this.props.text}
            />
        );
    }
}

export default MessageInput;