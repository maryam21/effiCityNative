import React, { Component } from 'react';
import { TextInput, Button, View, StyleSheet , FlatList} from 'react-native';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            messages: [],
            users: []
        };
    }

    sendMessage = () => {
        
    }

    render() {
        return (
            <View>
                <FlatList
                    data={[{key: '1', time: ''}]}
                    keyExtractor={item => item.time}
                    renderItem={({ item }) => item.key}
                    inverted />
                <View style={ styles.footer } >
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                    <Button
                        onPress={this.sendMessage}
                        title="Send"
                        color="#841584"
                        accessibilityLabel="send your message"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
      flex: 1,
      flexDirection: 'row'
    },
  });

export default ChatRoom;