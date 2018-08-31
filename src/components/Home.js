import React from 'react';
import { View, StyleSheet } from 'react-native';
import FBLoginButton from './FBLoginButton';
import Listings from './Listings';
import ItemPicker from './ItemPicker';

export default class Home extends React.Component {
  state = {
    selectedArea: null,
    selectedType: null,
    areas: ['AC Area', 'LO Area', 'Mon Area'],
    types: ['Flat', 'House']
  }

  captureAreaValue = (value) => {
    this.setState({
      selectedArea: value
    })
  }

  captureTypeValue = (value) => {
    this.setState({
      selectedType: value
    })
  }

  render() {
    return (
      <View style={styles.container} >
        <FBLoginButton />
        <ItemPicker onChange={ e => { this.captureAreaValue(e) }} items={this.state.areas} />
        <ItemPicker onChange={ e => { this.captureTypeValue(e) }} items={this.state.types} />
        <Listings selectedArea={this.state.selectedArea} />
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