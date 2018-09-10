import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from 'react-native-firebase';

const dbRef = firebase.database().ref('chatrooms/');
const usersDbRef = firebase.database().ref('/users/');
let newChatroomKey;

class ListingDetails extends React.Component {
  createChatRoom = () => {
    console.log(firebase.auth().currentUser);
    newChatroomKey = dbRef.push().key;
    const sender = firebase.auth().currentUser;
    let updates ={}
    let userUpdates ={}
    
    if (sender) {
      updates[newChatroomKey + '/users/' + sender.uid] = sender.displayName;
      updates[newChatroomKey + '/users/' + this.props.consultantUid] = this.props.consultantName;
      userUpdates[sender.uid + '/chatrooms/' + newChatroomKey] = {chatroomOtherUserId: this.props.consultantName};
      userUpdates[this.props.consultantUid + '/chatrooms/' + newChatroomKey] = {chatroomOtherUserId: sender.displayName};

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
    this.props.navigation.navigate('ChatRoom', { chatroomId: newChatroomKey })
  } 

  render() {
    console.log(this.props.navigation.state)
    return (
      <View style={styles.container} >
        <Text>{this.props.navigation.state.params.title}</Text>
        <Text>{this.props.navigation.state.description}</Text>
        <Text>{this.props.navigation.state.consultantName}</Text>
        <Button
          onPress={this.handlePress}
          title="Chat with consultant"
          color="#841584"
          accessibilityLabel="start chatting with consultant"
        />
        <Button
          onPress={this.requestVisit}
          title="Request visit"
          color="#841584"
        />
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