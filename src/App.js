import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Home from './components/Home';
import { registerScreens } from './screens/index';

registerScreens(); // register all of the app's screens

export const navigator = Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'HomeScreen', // this is a registered name for a screen
      icon: require('./img/home-page.png'), //<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Home page">Home page</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"     title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      title: 'Home'
    },
    {
      label: 'Register',
      screen: 'RegisterScreen',
      icon: require('./img/round-account-button-with-user-inside.png'),  //<div>Icons made by <a href="https://www.flaticon.com/authors/google" title="Round account button with user inside">Round account button with user inside</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"     title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      title: 'Register'
    }
  ]
});

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container } >
        <Home />
      </View>
    );
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
