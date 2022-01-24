import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../Navigation';

type NavProps = NativeStackScreenProps<StackParamList, 'Home'>

interface Props extends NavProps {}

export const HomeScreen = (props: Props) => {
  const { navigation } = props
  const onPress = () => {
    navigation.navigate('Detail', { userId: '12345' })
  }

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>This is the HomeScreen</Text>
      </TouchableOpacity>
    </View>
  )
}
