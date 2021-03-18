/**
 * @format
 */

import {Alert, AppRegistry} from 'react-native';
import App from './App';
import messaging from '@react-native-firebase/messaging';
import {name as appName} from './app.json';
console.log('abc');
console.log(messaging().getToken());
// Register background handler
// Register background handler
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the background!', remoteMessage);
// });
messaging().onMessage(async remoteMessage => {
  Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
});
function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    // O app foi aberto pelo iOS em plano de fundo, ignore
  }
  return App;
}

AppRegistry.registerComponent(appName, () => App);
