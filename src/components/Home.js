import React from 'react';
import { View, StyleSheet } from 'react-native';
import FBLoginButton from './FBLoginButton';

export default class App extends React.Component {
    render() {    
      return (
        <View>
            <FBLoginButton style={styles.login} />
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