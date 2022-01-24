import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/HomeScreen';
import { DetailScreen } from './screens/DetailScreen';
import React from 'react';

export type MainStackParamList = {
  Home: undefined;
  Detail: { userId: string };
};

const StackNavigator = createNativeStackNavigator<MainStackParamList>()

export const MainStack = () => {
  return (
    <NavigationContainer>
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'My HomeScreen' }}
      />
      <StackNavigator.Screen
        name="Detail"
        component={DetailScreen}
      />
  </StackNavigator.Navigator>
  </NavigationContainer>
  )
}
