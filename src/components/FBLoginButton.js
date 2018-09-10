import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

FBLoginButton = (props) => {
  persistUserToDb = (user) => {
    const dbRef = firebase.database().ref();

    let userData = {
      username: user.user.displayName,
      email: user.user.email,
    };

    let updates ={}
    updates['/users/' + user.user.uid] = userData;

    dbRef.update(updates).
      catch((err) => console.log(err))
  }

  authenticateUser = (error, result) => {
    if (error) {
      alert("login has error: " + result.error);

    } else if (result.isCancelled) {
      alert("login is cancelled.");

    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
          firebase.auth().signInAndRetrieveDataWithCredential(credential).
          then((user) => {
            this.persistUserToDb(user)
          }).
          catch((err) => {
            console.log(err)
          })
        }
      )
    }
  }
  return (
    <View style={styles.login} >
      <LoginButton
        readPermissions={["public_profile, email"]}
        onLoginFinished={(error, result) => {
          this.authenticateUser(error, result)
        }
        }
        onLogoutFinished={() => console.log("logout.")} />
    </View>
  );
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
