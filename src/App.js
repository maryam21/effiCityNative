import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './components/home/Index';
import ListingDetails from './components/listing_details/Index';
import ChatRoom from './components/chatroom/Index';
import UserAccount from './components/user_account/Index';

const RootStack = createStackNavigator(
  {
    Home: Home,
    Details: ListingDetails,
    ChatRoom: ChatRoom,
    Account: UserAccount,
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