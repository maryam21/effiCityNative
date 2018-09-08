import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Link, Route, NativeRouter } from 'react-router-native';
import ChatRoom from './ChatRoom';


export default class ListingDetails extends React.Component {
    render() {
      return (
        <View style={ styles.container } >
          <Text>{this.props.title}</Text>
          <Text>{this.props.description}</Text>
          <Link
            to="/chatroom/:id"
            underlayColor='#f0f4f7'>
            <Text>Chat with consultant</Text>
          </Link>
          <NativeRouter>
          <Route path="/chatroom/:id" component={ChatRoom}/>
          </NativeRouter>
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
  