import React, { useEffect } from 'react';
import AppNavigator from './navigation/AppNavigator';
import { firebase } from './config/firebase';
import { LogBox } from 'react-native';

// Игнорируем предупреждения таймера, которые возникают при использовании Firestore
LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  useEffect(() => {
    // Проверяем подключение к Firebase при запуске приложения
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  return <AppNavigator />;
}
