import { Category } from '../../managers/api/models/Category';
import { AppThunkAction } from '../store';
import { ApiClient } from '../../managers/api/ApiClient';

export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS"

export interface GetCategoriesSuccessAction {
  type: typeof GET_CATEGORIES_SUCCESS,
  payload: readonly Category[]
}

function _getCategories(categories: readonly Category[]): GetCategoriesSuccessAction {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: categories
  }
}

export function getCategories(): AppThunkAction {
  return async (dispatch) => {
    const categories = await ApiClient.getCategories()
    dispatch(_getCategories(categories))
  }
}
