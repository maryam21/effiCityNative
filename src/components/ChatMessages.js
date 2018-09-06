import React, { Component } from 'react';
import { Text, SectionList} from 'react-native';
import firebase from 'react-native-firebase';

class ChatMessages extends Component {
    state = {
        data: []
    }

    getMessages = () => {
        const dbRef = firebase.database().ref('/chatrooms/' + this.props.chatroomId + '/messages/' );   

        let items = [];
        dbRef.on('value', (snapshot) => {
            snapshot.forEach((child) => {
                console.log(child)
                items.push({
                    title: child.val().author,
                    data: [
                    child.val().text,
                    child.val().timestamp,
                    ]
                    
                })
            })

            this.setState({
                data: items.reverse()
            })
        }, 
        (err) => { console.log(err) }
        )
        
    }

    componentDidMount () {
        this.getMessages();
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
            inverted/>
        );
    }
}

export default ChatMessages;