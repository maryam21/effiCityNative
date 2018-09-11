import React from 'react';
import { View, StyleSheet } from 'react-native';
import Listings from './Listings';
import ItemPicker from './ItemPicker';
import TextInput from '../common/TextInput';
import ButtonElement from '../common/ButtonElement';

class Home extends React.Component {

  state = {
    selectedArea: 'AC Area',
    selectedType: 'house',
    selectedMaxPrice: 1000000,
    areas: ['AC Area', 'LO Area', 'Mon Area'],
    types: ['house', 'flat']
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

  goToUserAccount = () => {
    this.props.navigation.navigate('Account')
  }

  render() {
    return (
      <View style={styles.container} >
      <View style={styles.login} >
        <ButtonElement text='Account' handlePress={this.goToUserAccount}/>
        </View>
        <ItemPicker onValueChange={this.onAreaChange} value={this.state.selectedArea} items={this.state.areas} />
        <ItemPicker onValueChange={this.onTypeChange} value={this.state.selectedType} items={this.state.types} />
        <TextInput placeholder='Input max price' value={this.state.selectedMaxPrice} onValueChange={this.onMaxPriceChange} />
        <Listings navigation={this.props.navigation} selectedArea={this.state.selectedArea} selectedType={this.state.selectedType} selectedMaxPrice={this.state.selectedMaxPrice} />
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
  login: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default Home;