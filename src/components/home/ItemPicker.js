import React from "react";
import { StyleSheet, View, Picker } from 'react-native';

const ItemPicker = (props) => {
    return (
      <View style={ styles.container }>
        <Picker
          selectedValue={props.value}
          style={{ height: 20, width: undefined, marginTop: 20 }}
          onValueChange={props.onValueChange}
        >
          {props.items.map((item) => <Picker.Item label={item} value={item} key={item} />)}
        </Picker>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ItemPicker;