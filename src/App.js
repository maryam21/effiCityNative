import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import ListingDetails from './components/ListingDetails';
import ChatRoom from './components/ChatRoom';

const RootStack = createStackNavigator(
  {
    Home: Home,
    Details: ListingDetails,
    ChatRoom: ChatRoom,
  },
  {
    initialRouteName: 'Home',
  }
);

class App extends React.Component {
  render() {
    return <RootStack />;
  }
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