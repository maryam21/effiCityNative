import React from 'react';
import { View, StyleSheet } from 'react-native';
import FBLoginButton from './FBLoginButton';
import Listings from './Listings';
import ItemPicker from './ItemPicker';
import MaxPriceInput from './MaxPriceInput';

export default class Home extends React.Component {
  state = {
    selectedArea: null,
    selectedType: null,
    areas: ['AC Area', 'LO Area', 'Mon Area'],
    types: ['flat', 'house']
  }
  
  onAreaChange = (value) => {
    this.setState({
      selectedArea: value
    })
  }

  onTypeChange = (value) => {
    this.setState({
      selectedType: value
    })
  }

  render() {
    return (
      <View style={styles.container} >
        <FBLoginButton />
        <ItemPicker onValueChange={this.onAreaChange} value={this.state.selectedArea} items={this.state.areas} />
        <ItemPicker onValueChange={this.onTypeChange} value={this.state.selectedType} items={this.state.types} />
        <MaxPriceInput />
        <Listings selectedArea={this.state.selectedArea} selectedType={this.state.selectedType} />
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