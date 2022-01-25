import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../Navigation';
import { useAppDispatch, useAppSelector } from '../store/store';
import { increment } from '../store/counter/counterActions';

type NavProps = NativeStackScreenProps<StackParamList, 'Home'>

interface Props extends NavProps {}

export const HomeScreen = (props: Props) => {
  const { navigation } = props
  const onPress = () => {
    navigation.navigate('Detail', { userId: '12345' })
  }
  const dispatch = useAppDispatch()
  const count = useAppSelector(state => state.counter.count)
  const incrementAction = () => {
    dispatch(increment())
  }

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>This is the HomeScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={incrementAction}>
        <Text>Count: {count}</Text>
      </TouchableOpacity>
    </View>
  )
}
