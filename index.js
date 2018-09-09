import { AppRegistry } from 'react-native';
import Navigator from 'native-navigation';
import App from './src/App';

Navigator.registerScreen('effiCityNative', () => App);
