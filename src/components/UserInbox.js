import React, { Component } from 'react';
import { Text, SectionList} from 'react-native';
import firebase from 'react-native-firebase';

class UserInbox extends Component {
    state = {
        data: ['ok']
    }

    getChatrooms = () => {
        const dbRef = firebase.database().ref('/chatrooms/');
        const user = firebase.auth().currentUser;  
        let items = ['yu'];

        dbRef.orderByChild('users').equalTo(user).on('value', (snapshot) => {
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

            this.setState({
                data: items
            })
        }, 
        (err) => { console.log(err) }
        )
        
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