import React, { useContext } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../Navigation';
import { EditMyStateContext, MyStateContext } from '../store/MyState';

type NavProps = NativeStackScreenProps<StackParamList, 'Home'>

interface Props extends NavProps {}

export const HomeScreen = (props: Props) => {
  const { navigation } = props
  const myState = useContext(MyStateContext)
  const editMyState = useContext(EditMyStateContext)

  const onButtonPress = () => {
    editMyState?.getUser()
  }

  const onPress = () => {
    navigation.navigate('Detail', { userId: '12345' })
  }

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>This is the HomeScreen</Text>
      </TouchableOpacity>
      <Button title={'Set user name'} onPress={onButtonPress} />
      <Text>{myState?.user?.name}</Text>
    </View>
  )
}
