import { Category } from '../../managers/api/models/Category';
import { GET_CATEGORIES_SUCCESS, GetCategoriesSuccess } from './categoriesActions';

export interface CategoriesState {
  readonly items: readonly Category[]
}

const initialState: CategoriesState = {
  items: []
}

export function categoriesReducer(
  state: CategoriesState = initialState,
  action: GetCategoriesSuccess
): CategoriesState {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        items: action.payload
      }
    }
    default: {
      return state
    }
  }
}
