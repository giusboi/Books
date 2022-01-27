import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../Navigation';
import { ApiClient } from '../managers/api/ApiClient';
import { Book } from '../managers/api/models/Book';

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

  const renderItem = useCallback<ListRenderItem<Book>>((book) => {
    return (
      <View>
        <Text>{book.item.title}</Text>
      </View>
    )
  }, [])

  const keyExtractor = useCallback((item, index) => `book_${index}`, [])

  return (
    <View style={{flex: 1}}>
      <Text>The listNameEncoded {listNameEncoded}</Text>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}
