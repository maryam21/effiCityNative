import React, { Component } from 'react';
import { Text, SectionList} from 'react-native';

class ChatMessages extends Component {
    state = {
        text: null,
        timestamp: null,
        author: null,
    }

    render() {
        return (
            <SectionList
                renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                )}
                sections={[
                    { title: 'user21', data: ['hello'] },
                    { title: 'superuser', data: ['hi'] },
                ]}
                keyExtractor={(item, index) => item + index}
            />
        );
    }
}

export default ChatMessages;