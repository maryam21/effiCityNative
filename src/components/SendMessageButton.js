import React from 'react';
import firebase from 'react-native-firebase';
import { Container, Button, Content, Text } from 'native-base';

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
        <Container>
        <Content>
          <Button
            onPress={this.handleClick}
          small primary>
            <Text>Send</Text>
          </Button>
        </Content>
      </Container>
    );
}

export default sendMessageButton;