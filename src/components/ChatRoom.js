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
                <View style={styles.messages} >
                    <ChatMessages />
                </View>
                <View style={styles.footer} >
                    <View style={styles.input} >
                        <MessageInput />
                    </View>
                    <SendMessageButton />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 8,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignSelf: 'stretch',
      marginLeft: 10,
      marginRight: 10
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
    },
    messages: {
        flex: 13,
    },
    input: {
        flex: 1,
    },
  });

export default ChatRoom;