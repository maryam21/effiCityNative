import React from 'react';
import { View, StyleSheet } from 'react-native';
import FBLoginButton from './FBLoginButton';
import ListingCard from './ListingCard';

export default class App extends React.Component {
    render() {    
      return (
        <View>
            <FBLoginButton />
            <ListingCard />
        </View>
      );
    }
}
