import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ChatMessages from './ChatMessages';
import MessageInput from './MessageInput';
import SendMessageButton from './SendMessageButton';

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
                    <SendMessageButton />
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