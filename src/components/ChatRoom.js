import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ChatMessages from './ChatMessages';
import MessageInput from './MessageInput';
import SendMessageButton from './SendMessageButton';

class ChatRoom extends Component {

    state = {
        messages: [],
        users: [],
        userInput: null
    };

    onMessageTextChange = (value) => {
        this.setState({ userInput: value })
    }

    clearInput = () => {
        this.setState({
            userInput: ''
        })
    }

    render() {
        console.log('cahtroom')
        return (
            <View style={styles.container} >
                <View style={styles.messages} >
                    <ChatMessages chatroomId={this.props.chatroomId} />
                </View>
                <View style={styles.footer} >
                    <View style={styles.input} >
                        <MessageInput text={this.state.userInput} onChangeText={this.onMessageTextChange} />
                    </View>
                    <View style={styles.button} >
                        <SendMessageButton chatroomId={this.props.chatroomId} clearInput={this.clearInput} text={this.state.userInput} />
                    </View>
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
        flex: 4,
        alignSelf: 'flex-start'
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end'
    },
});

export default ChatRoom;