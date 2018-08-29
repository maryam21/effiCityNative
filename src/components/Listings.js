import React from 'react';
import { FlatList } from 'react-native';
import firebase from 'react-native-firebase';
import ListingCard from './ListingCard';

let dbRef = firebase.database().ref('listings/');   

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: []
    };
  }
  
  getListings() {
    let items = [];
    dbRef.once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        items.push({
          key: child.key,
          description: child.val().description
        })
      })
      this.setState({
        data: items
      })
    }).catch((err) => {console.log(err)})
  } 
    
  componentWillMount () {
    this.getListings();
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => <ListingCard title={item.key} description={item.description} />}
      />
    );
  }
}