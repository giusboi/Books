import React from 'react';
import { Button, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../Navigation';
import { useAppDispatch, useAppSelector } from '../store/store';
import { changeUser, ChangeUserType } from '../store/user/userActions';

type NavProps = NativeStackScreenProps<StackParamList, 'Detail'>

interface Props extends NavProps {}

export const DetailScreen = (props: Props) => {
  const { route } = props
  // const { userId } = route.params
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const onPress = () => {
    dispatch(changeUser('MarioNEW', ChangeUserType.NAME))
  }

  return (
    <View>
      <Text>This is the DetailScreen {user.userId}</Text>
      <Button title={'Change the name'} onPress={onPress} />
      <Text>{user.name}</Text>
    </View>
  )
}
