import React from 'react';
import { FlatList } from 'react-native';
import ListingCard from './ListingCard';

export default class Listings extends React.Component {
    render() {
      return (
        <FlatList
            data={[{key: 'App', description: 'blablal'}, {key: 'Chi', description: 'ooo'}]}
            renderItem={({item}) => <ListingCard title={item.key} description={item.description}/>}
        />
      );
    }
  }