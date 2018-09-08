import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import firebase from 'react-native-firebase';
import InboxElement from './InboxElement';

class UserInbox extends Component {
    state = {
        data: []
    }

    getChatrooms = () => {
        let items = [];

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const dbRef = firebase.database().ref('/users/' + user.uid + '/chatrooms/');

                dbRef.on('value', (snapshot) => {
                    console.log(snapshot)
                    snapshot.forEach((child) => {
                        items.push({
                            username: child.val().chatroomOtherUser,
                        })

                        this.setState({
                            data: items
                        })
                    },
                        (err) => { console.log(err) }
                    )
                })
    
            } else {
                alert('you need to be logged in first')
            }
          });
    }

    componentDidMount () {
        this.getChatrooms();
    }
    
    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <InboxElement username={item.username} />}
                />
            </View>
        );
    }
}

export default UserInbox;