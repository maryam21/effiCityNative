import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import firebase from 'react-native-firebase';
import ButtonElement from '../common/ButtonElement';

class ListingDetails extends React.Component {

  createChatRoom = () => {
    const dbRef = firebase.database().ref('chatrooms/');
    const usersDbRef = firebase.database().ref('/users/');
    const newChatroomKey = dbRef.push().key;
    console.log(newChatroomKey)
    let updates = {}
    let userUpdates = {}

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        updates[newChatroomKey + '/users/' + user.uid] = user.displayName;
        updates[newChatroomKey + '/users/' + this.props.navigation.state.params.consultantUid] = this.props.navigation.state.params.consultantName;
        userUpdates[user.uid + '/chatrooms/' + newChatroomKey] = { chatroomOtherUser: this.props.navigation.state.params.consultantName };
        userUpdates[this.props.navigation.state.params.consultantUid + '/chatrooms/' + newChatroomKey] = { chatroomOtherUser: user.displayName };

        dbRef.update(updates).
          catch((err) => console.log(err))

        usersDbRef.update(userUpdates).
          catch((err) => console.log(err)) 
      }
    })
    return newChatroomKey;
  }

  requestVisit = () => {
    alert('The consultant is going to be notified about your visit request')
  }

  chat = () => {
    const chatroom = this.createChatRoom();
    if (chatroom)
      this.props.navigation.navigate('ChatRoom', { chatroomId: chatroom })
  }

  render() {
    return (
      <View style={styles.container} >
        <Text>{this.props.navigation.state.params.title}</Text>
        <Text>{this.props.navigation.state.params.description}</Text>
        <Text>{this.props.navigation.state.params.consultantName}</Text>
        <ButtonElement text='Chat with consultant' handlePress={this.chat} />
        <ButtonElement text='Request a visit' handlePress={this.requestVisit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
});

export default ListingDetails;