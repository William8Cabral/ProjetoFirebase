import React, {useEffect} from 'react';
import {Alert, Text, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App: React.FC = () => {
  useEffect(() => {
    pegaToken();
  }, []);

  const pegaToken = async (): Promise<void> => {
    const token = await messaging().getToken();
    console.log('entrou');
    console.log(token);
    console.log('baixo');
    const segundo = await messaging().getAPNSToken();
    console.log(segundo);
  };

  return (
    <View style={{paddingTop: 50, paddingLeft: 50}}>
      <Text>oi</Text>
    </View>
  );
};

export default App;
