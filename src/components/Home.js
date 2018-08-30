import React from 'react';
import { View, StyleSheet } from 'react-native';
import FBLoginButton from './FBLoginButton';
import Listings from './Listings';
import AreaPicker from './AreaPicker';

export default class App extends React.Component {
    render() {    
      return (
        <View style={ styles.container } >
            <FBLoginButton />
            <AreaPicker />
            <Listings />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
});