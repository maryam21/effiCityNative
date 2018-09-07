import React, { Component } from 'react';
import { Text, SectionList} from 'react-native';
import firebase from 'react-native-firebase';

class UserInbox extends Component {
    state = {
        data: [{
            title: 'ho',
            data: ['ok']
        }]
    }

    getChatrooms = () => {
        const dbRef = firebase.database().ref('/chatrooms/');
        let items = ['yu'];
        console.log('opl')

        firebase.auth().onAuthStateChanged(function(user) {
            console.log('ui')

            if (user) {
                console.log('hoo')
                dbRef.orderByChild('users').equalTo(user.uid).on('value', (snapshot) => {
                    console.log(snapshot.val())
                    snapshot.forEach((child) => {
                        console.log(child)
                        /*items.push({
                            /*title: child.val(),
                            data: [
                            child.val().messages,
                            ]
                        })*/
                    })
                    /*
                                this.setState({
                                    data: items
                                })*/
                },
                    (err) => { console.log(err) }
                )
            } else {
                alert('you need to be logged in first')
            }
          });
    }

    componentDidUpdate () {
        this.getChatrooms();
    } 

    componentDidMount () {
        this.getChatrooms();
    }

    render() {
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