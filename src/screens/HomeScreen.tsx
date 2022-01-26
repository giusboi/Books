import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../Navigation';
import { useAppDispatch, useAppSelector } from '../store/store';
import { increment, incrementAfter } from '../store/counter/counterActions';
import { countSelector, multiplyCountSelector, useMultiplyCount } from '../store/counter/counterSelectors';

type NavProps = NativeStackScreenProps<StackParamList, 'Home'>

interface Props extends NavProps {}

export const HomeScreen = (props: Props) => {
  console.log('render')
  const { navigation } = props
  const [name, setName] = useState('')
  const onPress = () => {
    navigation.navigate('Detail', { userId: '12345' })
  }
  const dispatch = useAppDispatch()
  // const count = useAppSelector((state) => multiplyCountSelector(state, 2))
  const count = useAppSelector(countSelector)
  // const count = useMultiplyCount(4)

  const incrementAction = () => {
    dispatch(incrementAfter(10, 5000))
  }

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>This is the HomeScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={incrementAction}>
        <Text>Count: {count}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setName(name + 'i')}>
        <Text>Render me again!</Text>
      </TouchableOpacity>
    </View>
  )
}
