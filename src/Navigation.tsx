import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/HomeScreen';
import { DetailScreen } from './screens/DetailScreen';
import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Page1 } from './screens/Page1';

export type MainStackParamList = {
  Home: undefined;
  Detail: { userId: string };
};

const StackNavigator = createNativeStackNavigator<MainStackParamList>()
// const DrawerNavigator = createDrawerNavigator()
const BottomTabNavigator = createBottomTabNavigator()

const MainStack = () => {
  return (
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
  )
}

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator.Navigator initialRouteName={"Home"}>
        <BottomTabNavigator.Screen name={"MainStack"} component={MainStack} />
        <BottomTabNavigator.Screen name={"Page1"} component={Page1} />
      </BottomTabNavigator.Navigator>
      {/*<MainStack />*/}
    </NavigationContainer>
  )
}
