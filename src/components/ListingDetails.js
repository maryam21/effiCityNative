import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'react-native-firebase';
import { Container, Button, Content, Text } from 'native-base';

let newChatroomKey;

ListingDetails = (props) => {
  createChatRoom = () => {
    const dbRef = firebase.database().ref('chatrooms/');
    const usersDbRef = firebase.database().ref('/users/');
    newChatroomKey = dbRef.push().key;
    const sender = firebase.auth().currentUser;
    let updates = {}
    let userUpdates = {}

    if (sender) {
      updates[newChatroomKey + '/users/' + sender.uid] = sender.displayName;
      updates[newChatroomKey + '/users/' + props.consultantUid] = props.consultantName;
      userUpdates[sender.uid + '/chatrooms/' + newChatroomKey] = { chatroomOtherUserId: props.consultantName };
      userUpdates[props.consultantUid + '/chatrooms/' + newChatroomKey] = { chatroomOtherUserId: sender.displayName };

      dbRef.update(updates).
        catch((err) => console.log(err))

      usersDbRef.update(userUpdates).
        catch((err) => console.log(err))
    }
  }

  requestVisit = () => {
    alert('The consultant is going to be notified about your visit request')
  }

  handlePress = () => {
    this.createChatRoom();
    props.navigation.navigate('ChatRoom', { chatroomId: newChatroomKey })
  }

  return (
    <View style={styles.container} >
      <Text>{props.navigation.state.params.title}</Text>
      <Text>{props.navigation.state.params.description}</Text>
      <Text>{props.navigation.state.params.consultantName}</Text>

      <Container>
        <Content>
          <Button
            onPress={this.handlePress}
            small transparent>
            <Text>Chat with consultant</Text>
          </Button>
        </Content>
      </Container>

      <Container>
        <Content>
          <Button
            onPress={this.requestVisit}
            small transparent>
            <Text>Request visit</Text>
          </Button>
        </Content>
      </Container>
    </View>
  );
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