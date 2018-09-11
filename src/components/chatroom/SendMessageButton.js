import React from 'react';
import firebase from 'react-native-firebase';
import { Container, Button, Content, Text } from 'native-base';

class sendMessageButton extends React.Component {

    sendMessage = () => {
        const dbRef = firebase.database().ref('/chatrooms/');
        const newMessageKey = dbRef.child('messages').push().key;
        const sender = firebase.auth().currentUser;
        let updates = {}
        console.log(this.props.text)
        if (sender) {
            let messageData = {
                author: sender.displayName,
                text: this.props.text,
                timestamp: Date.now()
            };

            updates[this.props.chatroomId + '/messages/' + newMessageKey] = messageData;

            dbRef.update(updates).
                catch((err) => console.log(err))
        }
    }

    handlePress = () => {
        this.sendMessage()
        this.props.clearInput()
    }

    render() {
        return (
            <Container>
                <Content>
                    <Button
                        onPress={this.handlePress}
                        small primary>
                        <Text>Send</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default sendMessageButton;