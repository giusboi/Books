import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../Navigation';

type NavProps = NativeStackScreenProps<StackParamList, 'Detail'>

interface Props extends NavProps {}

export const DetailScreen = (props: Props) => {
  const { route } = props
  const { listNameEncoded } = route.params

  return (
    <View>
      <Text>The listNameEncoded {listNameEncoded}</Text>
    </View>
  )
}
