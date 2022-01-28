import { Book } from '../../managers/api/models/Book';
import { BooksAction, CLEAR_BOOKS, GET_BOOKS_LOADING, GET_BOOKS_SUCCESS } from './booksActions';

export interface BooksState {
  readonly items: readonly Book[]
  readonly loading: boolean
}

const initialState: BooksState = {
  items: [],
  loading: true
}

export function booksReducer(
  state: BooksState = initialState,
  action: BooksAction
): BooksState {
  switch (action.type) {
    case GET_BOOKS_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_BOOKS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        loading: false
      }
    }
    case CLEAR_BOOKS: {
      return {
        ...state,
        items: []
      }
    }
    default: {
      return state
    }
  }
}
