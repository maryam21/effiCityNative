import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

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
                    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                    firebase.auth()
                    .signInAndRetrieveDataWithCredential(credential)
                    .then((user) => {
                      console.log('ok')
                    })
                    .catch((err) => {
                      this.onError && this.onError(err)
                      console.log(err)
                      })
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