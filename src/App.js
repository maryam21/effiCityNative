import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import ListingDetails from './components/ListingDetails';
import UserInbox from './components/UserInbox';
import ChatMessages from './components/ChatMessages';

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container } >
      <Home/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
});
