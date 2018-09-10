import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import firebase from 'react-native-firebase';
import ListingCard from './ListingCard';

let dbRef = firebase.database().ref('listings/');   

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
    };
  }
  
  componentDidUpdate(){
    this.getListings()
  }

  getListings() {
    let items = [];
    dbRef.orderByChild('area').equalTo(this.props.selectedArea).once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        if (child.val().type == this.props.selectedType && child.val().price <= this.props.selectedMaxPrice) {    
          items.push({
            key: child.key,
            description: child.val().description,
            consultantName: child.val().consultant.name,
            consultantUid: child.val().consultant.uid,
          })
        }
      })
      this.setState({
        data: items
      })
    }).catch((err) => {console.log(err)})
  } 

  componentDidMount () {
    this.getListings();
  }

  render() {
    return (
      <View style={ styles.container } >
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => <ListingCard navigation={this.props.navigation} title={item.key} description={item.description} consultantName={item.consultantName} consultantUid={item.consultantUid} />}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
  },
});