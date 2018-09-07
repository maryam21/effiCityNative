import React from 'react';
import { Button } from 'react-native';
import firebase from 'react-native-firebase';

const sendMessageButton = function(props) {
    sendMessage = () => {
        const dbRef = firebase.database().ref('/chatrooms/');
        const newMessageKey = dbRef.child('messages').push().key;
        const sender = firebase.auth().currentUser;
        let updates = {}

        if (sender) {
            let messageData = {
                author: sender.displayName,
                text: props.text,
                timestamp: Date.now()
            };

            updates[props.chatroomId + '/messages/' + newMessageKey] = messageData;

            dbRef.update(updates).
                catch((err) => console.log(err))
        }
    }

    handleClick = () => {
        this.sendMessage()
        props.clearInput()
    }

    return (
        <Button
            onPress={this.handleClick}
            style={{ height: 1 }}
            title="Send"
            color="#841584"
            accessibilityLabel="send your message"
        />
    );
}

export default sendMessageButton;