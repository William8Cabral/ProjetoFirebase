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
//In cases where the message is data-only and the device is in the background or quit, both Android & iOS treat the message as low priority and will ignore it (i.e. no event will be sent). You can however increase the priority by setting the priority to high (Android) and content-available to true (iOS) properties on the payload.
messaging().onMessage(async remoteMessage => {
  Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
});


messaging().onNotificationOpenedApp(remoteMessage => {
  console.log(
    'Notification caused app to open from background state:',
    remoteMessage.notification,
  );
  remoteMessage.notification.title="oi";
});

messaging.NotificationAndroidVisibility=true;
messaging().setAutoInitEnabled(true);
// Check whether an initial notification is available
messaging()
  .getInitialNotification()
  .then(remoteMessage => {
    if (remoteMessage) {
      console.log(
        'Notification caused app to open from quit state:',
        remoteMessage.notification,
      );
    }
  });

function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    // O app foi aberto pelo iOS em plano de fundo, ignore
  }
  return App;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck(messaging().getIsHeadless));
