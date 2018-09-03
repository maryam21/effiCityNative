import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ListingDetails extends React.Component {
    render() {
      return (
        <View style={ styles.container } >
          <Text>{this.props.title}</Text>
          <Text>{this.props.description}</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: 'column',
    },
  });
  