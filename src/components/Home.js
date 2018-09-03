import React from 'react';
import { View, StyleSheet } from 'react-native';
import Listings from './Listings';
import ItemPicker from './ItemPicker';
import MaxPriceInput from './MaxPriceInput';

export default class Home extends React.Component {
  state = {
    selectedArea: null,
    selectedType: null,
    selectedMaxPrice: 0,
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

  onMaxPriceChange = (value) => {
    this.setState({
      selectedMaxPrice: value
    })
  }

  render() {
    return (
      <View style={styles.container} >
        <ItemPicker onValueChange={this.onAreaChange} value={this.state.selectedArea} items={this.state.areas} />
        <ItemPicker onValueChange={this.onTypeChange} value={this.state.selectedType} items={this.state.types} />
        <MaxPriceInput value={this.state.selectedMaxPrice} onValueChange={this.onMaxPriceChange} />
        <Listings navigator={this.props.navigator} selectedArea={this.state.selectedArea} selectedType={this.state.selectedType} selectedMaxPrice={this.state.selectedMaxPrice} />
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