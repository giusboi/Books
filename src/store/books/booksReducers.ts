import { Book } from '../../managers/api/models/Book';
import { GET_BOOKS_SUCCESS, GetBooksSuccess } from './booksActions';
import { CategoriesState } from '../categories/categoriesReducers';

export interface BooksState {
  readonly items: readonly Book[]
}

const initialState: BooksState = {
  items: []
}

export function booksReducer(
  state: BooksState = initialState,
  action: GetBooksSuccess
): BooksState {
  switch (action.type) {
    case GET_BOOKS_SUCCESS: {
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
