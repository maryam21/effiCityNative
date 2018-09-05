import { Navigation } from 'react-native-navigation';

import HomeScreen from '../components/Home';
import ListingDetailsScreen from '../components/ListingDetails';
import RegisterScreen from '../components/Register';
import ChatScreen from '../components/Chat';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
  Navigation.registerComponent('ListingDetailsScreen', () => ListingDetailsScreen);
  Navigation.registerComponent('RegisterScreen', () => RegisterScreen);
  Navigation.registerComponent('ChatScreen', () => ChatScreen);
}
