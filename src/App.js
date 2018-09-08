import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import ListingDetails from './components/ListingDetails';

const App = () => {
  <NativeRouter>
        <View style={styles.container}>
      <Route exact path="/" component={Home}/>
      <Route path="/chatroom/:id" component={ChatRoom}/>
      <Route path="/details" component={ListingDetails}/>
      </View>
  </NativeRouter>
    return (
      <View style={ styles.container } >
        <ListingDetails />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
});

export default App;