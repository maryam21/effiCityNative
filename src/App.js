import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Home from './components/Home';
import { registerScreens } from './screens/index';

registerScreens(); // register all of the app's screens

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'HomeScreen', // this is a registered name for a screen
      icon: require('./img/home-page.png'),
      title: 'Home'
    },
    {
      label: 'Listing Details',
      screen: 'ListingDetailsScreen',
      icon: require('./img/home-page.png'),
      title: 'Listing Details'
    },
    {
      label: '',
      screen: 'ListingCardScreen',
      icon: require('./img/home-page.png'),
      title: ''
    },
    {
      label: 'Register',
      screen: 'RegisterScreen',
      icon: require('./img/home-page.png'),
      title: 'Register'
    }
  ]
});

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container } >
        <Home navigation={this.props.navigation} />
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

//<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Home page">Home page</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"     title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>