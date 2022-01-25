import React, { useEffect } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../Navigation';
import { MyButton } from '../components/MyButton';

type NavProps = NativeStackScreenProps<StackParamList, 'Home'>

interface Props extends NavProps {}

interface Props {
  hello: ''
}

export const HomeScreen = (props: Props) => {
  const { navigation } = props

  const onPress = () => {
    navigation.navigate('Detail')
  }

  return (
    <View>
      <MyButton screenName={'HomeScreen'} onPress={onPress} />
    </View>
  )
}
