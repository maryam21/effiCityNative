import React from 'react';
import { View, StyleSheet } from 'react-native';
import FBLoginButton from './FBLoginButton';
import ListingCard from './ListingCard';

export default class App extends React.Component {
    render() {    
      return (
        <View>
            <FBLoginButton style={styles.login} />
            <ListingCard style={styles.card} />
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
    card: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});