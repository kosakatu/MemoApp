import React from 'react';
import firebase from 'firebase';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ENV from './env.json';

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:ENV.FIREBASE_DB_URL,
  projectId:ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_Bucket,
  messagingSenderId: ENV.FIREBASE_MESSAGING,
  appId: ENV.FIREBASE_APP_ID,
  measurementId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(firebaseConfig);

const AppNavigator = createStackNavigator(
  {
    Login:      { screen: LoginScreen },
    Signup:     { screen: SignupScreen },
    Home:       { screen: MemoListScreen },
    MemoDetail: { screen: MemoDetailScreen },
    MemoEdit:   { screen: MemoEditScreen },
  }, {
    defaultNavigationOptions: {
      headerTitle: 'Memot',
      headerTintColor: '#fff',
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#265366',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
  },
);


export default createAppContainer(AppNavigator);
