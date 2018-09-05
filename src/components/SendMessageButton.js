import React from 'react';
import { Button } from 'react-native';

const sendMessageButton = function(props) {
    sendMessage = () => {

    }

    return (
        <Button
            onPress={this.sendMessage}
            style={{ height: 1 }}
            title="Send"
            color="#841584"
            accessibilityLabel="send your message"
        />
    );
}

export default sendMessageButton;