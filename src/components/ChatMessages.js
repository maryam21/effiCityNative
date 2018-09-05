import React, { Component } from 'react';
import { StyleSheet , FlatList, Text} from 'react-native';

class ChatMessages extends Component {
    state = {
        text: '',
        timestamp: '',
        author: '',
    }

    render() {
        return (
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    keyExtractor={item => item.timestamp}
                    renderItem={({ item }) => <Text>{item.key}</Text>}
                    inverted 
                />
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});

export default ChatMessages;