import React, { Component } from 'react';
import { Text, SectionList, View} from 'react-native';
import firebase from 'react-native-firebase';

class UserInbox extends Component {
    state = {
        data: []
    }

    getChatrooms = () => {
        const db = firebase.database();
        let items = [];
        console.log('opl')

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const userChatrooms = firebase.database().ref('/users/' + user.uid + '/chatrooms/');
                
                userChatrooms.on('value', (snapshot) => {
                    
                    snapshot.forEach((child) => {
                        console.log(child)
                        let userInChatroom = child.val().chatroomOtherUserId
                        db.ref('/chatrooms/' + child.key + '/messages/').orderByKey().limitToFirst(1).on('value', (snapshot) => {
                            console.log(snapshot.val())
                            snapshot.forEach((child) => {
                                console.log(child.val().author)
                                items.push({
                                    title: userInChatroom,
                                    data: [
                                        child.val().text,
                                    ]
                                })
                            })
                        })

                        this.setState({
                            data: items
                        })
                    },
                        (err) => { console.log(err) }
                    )
                    console.log(items)
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
        console.log(this.state.data)
        return (
            <SectionList
                renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                )}
                sections={this.state.data}
                keyExtractor={(item, index) => item + index}
            />
        );
    }
}

export default UserInbox;