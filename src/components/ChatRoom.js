import React, { Component } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';
import ChatMessages from './ChatMessages';
import MessageInput from './MessageInput';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            messages: [],
            users: []
        };
    }

    render() {
        return (
            <View style={styles.container} >
                <ChatMessages />
                <View style={ styles.footer } >
                    <MessageInput />
                    <Button
                        onPress={this.sendMessage}
                        title="Send"
                        color="#841584"
                        accessibilityLabel="send your message"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignSelf: 'stretch',
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
      },
  });

export default ChatRoom;