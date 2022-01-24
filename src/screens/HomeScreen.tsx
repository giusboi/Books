import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../Navigation';

type NavProps = NativeStackScreenProps<MainStackParamList, 'Home'>
interface Props extends NavProps {}

export const HomeScreen = (props: Props) => {
  const { navigation } = props
  const onPress = () => navigation.navigate('Detail', { userId: 'myUserId' })
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>This is the HomeScreen</Text>
      </TouchableOpacity>
    </View>
  )
}
