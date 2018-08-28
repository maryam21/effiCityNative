import React from 'react';
import { FlatList } from 'react-native';
import ListingCard from './ListingCard';
import firebase from 'react-native-firebase';

const dbRef = firebase.database().ref('listings/');   

export default class Listings extends React.Component {
     
    
    componentWillMount () {

    }

    render() {
      return (
        <FlatList
            data={[{key: 'App', description: 'blablal'}, {key: 'Chi', description: 'ooo'}]}
            renderItem={({item}) => <ListingCard title={item.key} description={item.description}/>}
        />
      );
    }
  }