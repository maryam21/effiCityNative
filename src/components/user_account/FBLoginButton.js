import React from 'react';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

class FBLoginButton extends React.Component {

  persistUserToDb = (user) => {
    const dbRef = firebase.database().ref();

    let userData = {
      username: user.user.displayName,
      email: user.user.email,
    };

    let updates = {}
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
  render() {
    return (
      <LoginButton
        readPermissions={["public_profile, email"]}
        onLoginFinished={(error, result) => {
          this.authenticateUser(error, result)
        }
        }
        onLogoutFinished={() => console.log("logout.")} />
    );
  }
};

module.exports = FBLoginButton;
