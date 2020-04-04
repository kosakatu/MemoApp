import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoListScreen from './src/screens/MemoListScreen';

const AppNavigator = createStackNavigator({
  Home: { screen: MemoListScreen },
});

export default createAppContainer(AppNavigator);
