import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, ListRenderItem, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../Navigation';
import { useAppDispatch, useAppSelector } from '../store/store';
import { changeUser, ChangeUserType } from '../store/user/userActions';
import { Book } from '../managers/api/models/Book';
import { getBooks } from '../store/books/booksActions';

type NavProps = NativeStackScreenProps<StackParamList, 'Detail'>

interface Props extends NavProps {}

export const DetailScreen = (props: Props) => {
  const { route } = props
  const { listNameEncoded } = route.params
  const user = useAppSelector(state => state.user)
  const items = useAppSelector(state => state.books.items)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!listNameEncoded) {
      return
    }
    dispatch(getBooks(listNameEncoded))
  }, [dispatch, listNameEncoded])

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

  // if (loading) {
  //   return (
  //     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  //       <ActivityIndicator />
  //     </View>
  //   )
  // }

  return (
    <View style={{flex: 1}}>
      <Text>This is the DetailScreen {user.userId}</Text>
      <Button title={'Change the name'} onPress={onPress} />
      <Text>{user.name}</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor} />
    </View>
  )
}
