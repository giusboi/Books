import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/HomeScreen';
import { DetailScreen } from './screens/DetailScreen';
import React from 'react';

export type MainStackParamList = {
  Home: undefined
  Detail: { userId: string }
}

const MainStack = createNativeStackNavigator<MainStackParamList>()

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name={"Home"} component={HomeScreen} />
        <MainStack.Screen name={"Detail"} component={DetailScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}
