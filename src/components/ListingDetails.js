import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from 'react-native-firebase';

const dbRef = firebase.database().ref('chatrooms/');
const usersDbRef = firebase.database().ref('/users/');

class ListingDetails extends React.Component {
  createChatRoom = () => {
    console.log(firebase.auth().currentUser);
    const newChatroomKey = dbRef.push().key;
    const sender = firebase.auth().currentUser;
    let updates ={}
    let userUpdates ={}
    
    if (sender) {
      updates[newChatroomKey + '/users/' + sender.uid] = sender.displayName;
      updates[newChatroomKey + '/users/' + this.props.consultantUid] = this.props.consultantName;
      userUpdates[sender.uid + '/chatrooms/' + newChatroomKey] = {chatroomOtherUserId: this.props.consultantUid};
      userUpdates[this.props.consultantUid + '/chatrooms/' + newChatroomKey] = {chatroomOtherUserId: sender.uid};

      dbRef.update(updates).
      catch((err) => console.log(err))

      usersDbRef.update(userUpdates).
      catch((err) => console.log(err))
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <Text>{this.props.title}</Text>
        <Text>{this.props.description}</Text>
        <Text>{this.props.consultantName}</Text>
        <Button
          onPress={this.createChatRoom}
          title="Chat with consultant"
          color="#841584"
          accessibilityLabel="start chatting with consultant"
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