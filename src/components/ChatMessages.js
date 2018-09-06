import React, { Component } from 'react';
import { Text, SectionList} from 'react-native';
import firebase from 'react-native-firebase';

class ChatMessages extends Component {
    state = {
        data: []
    }

    getMessages () {
        console.log(this.state.data)
        const dbRef = firebase.database().ref('/chatrooms/' + this.props.chatroomId + '/messages/' );   
        console.log(dbRef)
        let items = [];
        dbRef.on('value', function(snapshot) {
            console.log('ol' + snapshot)
            snapshot.forEach((child) => {
                console.log(child)
                items.push({
                    key: child.key,
                    author: child.val().author,
                    text: child.val().text,
                    timestamp: child.val().timestamp,
                })
            })
            this.setState({
                data: items
            })
        }, (err) => { console.log(err) })
    }

    componentWillUpdate() {
        this.getMessages()
        console.log(this.state.data)
    }

    componentDidMount () {
        this.getMessages();
    }

    render() {
        console.log(this.state.data)
        return (
            <SectionList
                renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                )}
                sections={[
                    { title: this.state.data[0].author, data: this.state.data[0] },
                    { title: this.state.data[1].author, data: this.state.data[1] },
                ]}
                keyExtractor={(item, index) => item + index}
            />
        );
    }
}

export default ChatMessages;