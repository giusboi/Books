import React, { useContext, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../Navigation';
import { EditMyStateContext, MyStateContext } from '../state/MyState';

type NavProps = NativeStackScreenProps<StackParamList, 'Detail'>

interface Props extends NavProps {}

export const DetailScreen = (props: Props) => {
  const myState = useContext(MyStateContext)
  const editMyState = useContext(EditMyStateContext)

  const onPress = () => {
    editMyState?.editName('Giuseppe')
  }

  const onNetworkCallPress = () => {
    editMyState?.getUser()
  }

  return (
    <View>
      <Text>This is the DetailScreen {myState?.user?.name}</Text>
      <Button title={'Change Name To Giuseppe'} onPress={onPress} />
      <Button title={'Make Network Call'} onPress={onNetworkCallPress} />
    </View>
  )
}
