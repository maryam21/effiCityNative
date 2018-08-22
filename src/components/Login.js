import React from 'react';
import { Button } from 'react-native';
import { FACEBOOK_APP_ID } from 'react-native-dotenv';

export default class App extends React.Component {
    async logIn() {
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
          permissions: ['public_profile'],
        });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`);
        alert(
          `Hi ${(await response.json()).name}!`
        );
      }
    }

    render() {
      return (
        <Button
        onPress={this.logIn}
        title="Sign in with facebook"
        color="#3c50e8"
        />
      );
    }
  }
