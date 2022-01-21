import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/Navigation';
import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={HomeScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
