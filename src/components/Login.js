import React from 'react';
import { Button } from 'react-native';

export default class App extends React.Component {
    static navigationOptions = {
      title: 'Login',
    };

    onPressLearnMore() {
      alert('ok')
    }

    render() {
      return (
        <Button
        onPress={this.onPressLearnMore}
        title="Sign in with facebook"
        color="#3c50e8"
        />
      );
    }
  }
