import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

export default class FBLoginButton extends Component {
  render() {
    return (
      <View style={ styles.login } >
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
                    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
                    firebase.auth().signInAndRetrieveDataWithCredential(credential).
                    then((user) => {
                      console.log('ok')
                    }).
                    catch((err) => {
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

const styles = StyleSheet.create({
  login: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

module.exports = FBLoginButton;
