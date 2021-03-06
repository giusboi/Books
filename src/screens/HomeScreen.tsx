import React, { useCallback, useEffect, useState } from 'react';
import { Button, FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../Navigation';
import { useAppDispatch, useAppSelector } from '../store/store';
import { incrementAfter } from '../store/counter/counterActions';
import { countSelector } from '../store/counter/counterSelectors';
import { ApiClient } from '../managers/api/ApiClient';
import { Category } from '../managers/api/models/Category';
import { getCategories } from '../store/categories/categoriesActions';

type NavProps = NativeStackScreenProps<StackParamList, 'Home'>

interface Props extends NavProps {}

interface Props {}

export const HomeScreen = (props: Props) => {
  const { navigation } = props
  const dispatch = useAppDispatch()
  const items = useAppSelector(state => state.categories.items)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const count = useAppSelector(countSelector)
  // const count = useAppSelector((state) => multiplySelector(state, 2))

  const onIncrementPress = () => {
    const incrementAfterAction = incrementAfter(5000)
    dispatch(incrementAfterAction)
  }

  const onCategoryPress = useCallback((category: Category) => {
    navigation.navigate('Detail', {listNameEncoded: category.listNameEncoded})
  }, [navigation])

  const renderItem = useCallback<ListRenderItem<Category>>((elem) => {
    const category = elem.item
    return (
      <View>
        <TouchableOpacity onPress={() => onCategoryPress(category)}>
          <Text>{category.displayName}</Text>
        </TouchableOpacity>
      </View>
    )
  }, [onCategoryPress])

  const keyExtractor = useCallback((item, index) => `category_${index}`, []);

  return (
    <View style={{flex: 1}}>
      <Button title={'Increment'} onPress={onIncrementPress}/>
      <Text>Count: {count}</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}
