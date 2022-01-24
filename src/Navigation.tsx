import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/HomeScreen';
import { DetailScreen } from './screens/DetailScreen';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AboutScreen } from './screens/AboutScreen';

export type StackParamList = {
  Home: undefined
  Detail: { userId: string }
}

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator<StackParamList>()

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={"Detail"} component={DetailScreen} />
    </Stack.Navigator>
  )
}

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"MainStack"} component={MainStack} />
      <Tab.Screen name={"About"} component={AboutScreen} />
    </Tab.Navigator>
  )
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  )
}
