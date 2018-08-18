import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './Login';

export default class App extends React.Component {
    render() {    
      return (
        <View>
            <Login style={styles.login} />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    login: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
});