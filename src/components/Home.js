import React from 'react';
import { View, StyleSheet } from 'react-native';
import FBLoginButton from './FBLoginButton';
import Listings from './Listings';
import AreaPicker from './AreaPicker';

export default class Home extends React.Component {
    state = {
      selectedArea: null
    }

    captureValue = (value) => {
      this.setState({
        selectedArea: value
      })
    }

    render() { 
      return (
        <View style={ styles.container } >
            <FBLoginButton />
            <AreaPicker onChange={e => {this.captureValue(e)}} />
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