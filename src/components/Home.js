import React from 'react';
import { View, StyleSheet } from 'react-native';
import FBLoginButton from './FBLoginButton';
import ListingCard from './ListingCard';
import Listings from './Listings';
import AreaPicker from './AreaPicker';

export default class App extends React.Component {
    render() {    
      return (
        <View>
            <FBLoginButton />
            <AreaPicker />
            <Listings />
        </View>
      );
    }
}
