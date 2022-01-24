import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigator } from './src/Navigation';

const MainStack = createNativeStackNavigator()

export default function App() {
  return (
    <AppNavigator />
  );
}
