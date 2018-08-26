import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
  render() {
    return (
      <View>
        <LoginButton
          readPermissions={["public_profile"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                    console.log(data)
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
      </View>
    );
  }
};

module.exports = FBLoginButton;