import React, { useCallback, useEffect, useState } from 'react';
import { Button, FlatList, ListRenderItem, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../Navigation';
import { useAppDispatch, useAppSelector } from '../store/store';
import { changeUser, ChangeUserType } from '../store/user/userActions';
import { Book } from '../managers/api/models/Book';
import { ApiClient } from '../managers/api/ApiClient';

type NavProps = NativeStackScreenProps<StackParamList, 'Detail'>

interface Props extends NavProps {}

export const DetailScreen = (props: Props) => {
  const { route } = props
  const { listNameEncoded } = route.params

  const [books, setBooks] = useState<ReadonlyArray<Book>>([])

  useEffect(() => {
    if (!listNameEncoded) {
      return
    }
    ApiClient.getBooks(listNameEncoded).then(setBooks)
  }, [listNameEncoded])

  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  const onPress = () => {
    dispatch(changeUser('MarioNEW', ChangeUserType.NAME))
  }

  const renderItem = useCallback<ListRenderItem<Book>>((elem) => {
    const book = elem.item
    return (
      <View>
        <Text>{book.title}</Text>
      </View>
    )
  }, [])

  const keyExtractor = useCallback((item, index) => `book_${index}`, []);

  return (
    <View style={{flex: 1}}>
      <Text>This is the DetailScreen {user.userId}</Text>
      <Button title={'Change the name'} onPress={onPress} />
      <Text>{user.name}</Text>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={keyExtractor} />
    </View>
  )
}
