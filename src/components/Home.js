import React from 'react';
import { Text, View, Button } from 'react-native';

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    
    render() {
      const { navigate } = this.props.navigation;
    
      return (
        <View>
        <Button
        onPress={ () => navigate('Login') }
        title="Login"
        />
        </View>
      );
    }
  }
