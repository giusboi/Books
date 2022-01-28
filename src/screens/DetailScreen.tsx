import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../Navigation';
import { useAppDispatch, useAppSelector } from '../store/store';
import { changeUser, ChangeUserType } from '../store/user/userActions';
import { Book } from '../managers/api/models/Book';
import { clearBooks, getBooks } from '../store/books/booksActions';
import { ReqState } from '../store/ReqState';

type NavProps = NativeStackScreenProps<StackParamList, 'Detail'>

interface Props extends NavProps {}

export const DetailScreen = (props: Props) => {
  const { route } = props
  const { listNameEncoded } = route.params
  const user = useAppSelector(state => state.user)
  const items = useAppSelector(state => state.books.items)
  const reqState = useAppSelector(state => state.books.reqState)
  const dispatch = useAppDispatch()

  const getBooksAction = useCallback(() => {
    dispatch(getBooks(listNameEncoded))
  }, [dispatch, listNameEncoded])

  useEffect(() => {
    if (!listNameEncoded) {
      return
    }
    getBooksAction()
  }, [getBooksAction, listNameEncoded])

  useEffect(() => {
    return () => {
       dispatch(clearBooks())
    }
  }, [dispatch])

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

  if (reqState === ReqState.loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator />
      </View>
    )
  } else if (reqState === ReqState.error) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Error during network call</Text>
        <Button title="Try Again" onPress={getBooksAction} />
      </View>
    )
  }

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
