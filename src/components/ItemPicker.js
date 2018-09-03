import React, { Component } from "react";
import { StyleSheet, View, Picker } from 'react-native';

export default class ItemPicker extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Picker
          selectedValue={this.props.value}
          style={{ height: 20, width: undefined, marginTop: 20 }}
          onValueChange={this.props.onValueChange}
        >
          {this.props.items.map((item) => <Picker.Item label={item} value={item} key={item} />)}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});