import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../Navigation';
import { MyButton } from '../components/MyButton';
import { useAppDispatch, useAppSelector } from '../store/store';
import { increment } from '../store/counter/counterActions';
import { countSelector } from '../store/counter/counterSelectors';
import { ApiClient } from '../managers/api/ApiClient';
import { Category } from '../managers/api/models/Category';

type NavProps = NativeStackScreenProps<StackParamList, 'Home'>

interface Props extends NavProps {}

interface Props {}

export const HomeScreen = (props: Props) => {
  const { navigation } = props
  const dispatch = useAppDispatch()
  const [categories, setCategories] = useState<ReadonlyArray<Category>>([])
  const count = useAppSelector(countSelector)
  const onIncrementPress = () => {
    const incrementAction = increment()
    dispatch(incrementAction)
  }

  const onCategoryPress = useCallback((category: Category) => {
    navigation.navigate('Detail', {listNameEncoded: category.listNameEncoded})
  }, [navigation])

  useEffect(() => {
    ApiClient.getCategories().then(setCategories)
  }, [])

  const renderItem = useCallback<ListRenderItem<Category>>((elem) => {
    return (
      <View>
        <TouchableOpacity onPress={() => onCategoryPress(elem.item)}>
          <Text>{elem.item.displayName}</Text>
        </TouchableOpacity>
      </View>
    )
  }, [onCategoryPress])

  const keyExtractor = useCallback((item, index) => `category_${index}`, [])

  return (
    <View style={{flex: 1}}>
      <Button title={'Increment'} onPress={onIncrementPress}/>
      <Text>Count: {count}</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}
