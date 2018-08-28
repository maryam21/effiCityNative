import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListingCard from './ListingCard';

export default class Listings extends React.Component {
    render() {
      return (
        <FlatList
            data={[{key: 'a'}, {key: 'b'}]}
            renderItem={({item}) => <ListingCard/>}
        />
      );
    }
  }