import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from 'react-native-firebase';

const dbRef = firebase.database().ref('chatrooms/');   

class ListingDetails extends React.Component {
  createChatRoom = () => {
    console.log(firebase.auth().currentUser);
    const newChatroomKey = dbRef.push().key;
    const sender = firebase.auth().currentUser;
    let updates ={}
    
    if (sender) {
      chatroomData = [
        {
          name: sender.displayName,
          uid: sender.uid
        },
        {
          name: this.props.consultantName,
          uid: this.props.consultantUid
        }
      ];

      updates[newChatroomKey + '/users/'] = chatroomData;

      dbRef.update(updates).
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