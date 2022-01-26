import React from 'react';
import { Button, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../Navigation';
import { MyButton } from '../components/MyButton';
import { useAppDispatch, useAppSelector } from '../store/store';
import { increment } from '../store/counter/counterActions';
import { countSelector } from '../store/counter/counterSelectors';

type NavProps = NativeStackScreenProps<StackParamList, 'Home'>

interface Props extends NavProps {}

interface Props {}

export const HomeScreen = (props: Props) => {
  const { navigation } = props
  const dispatch = useAppDispatch()
  const count = useAppSelector(countSelector)
  const onIncrementPress = () => {
    const incrementAction = increment()
    dispatch(incrementAction)
  }


  const onPress = () => {
    navigation.navigate('Detail', { userId: '12345' })
  }

  return (
    <View>
      <MyButton screenName={'HomeScreen'} onPress={onPress} />
      <Button title={'Increment'} onPress={onIncrementPress}/>
      <Text>Count: {count}</Text>
    </View>
  )
}
