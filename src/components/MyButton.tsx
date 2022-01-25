import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface Props {
  screenName: string
  onPress: () => void
}

export const MyButton = (props: Props) => {
  const { screenName, onPress } = props
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>This is the {screenName}</Text>
    </TouchableOpacity>
  )
}

