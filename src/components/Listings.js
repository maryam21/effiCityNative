import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import firebase from 'react-native-firebase';
import ListingCard from './ListingCard';

class Listings extends React.Component {
  state = {
    data: [],
  };

  fetchListings() {
    const dbRef = firebase.database().ref('listings/');   
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

  componentDidUpdate () {
    this.fetchListings();
  }

  componentDidMount () {
    this.fetchListings();
  }

  render() {
    return (
      <View style={styles.container} >
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

export default Listings;