import { Book } from '../../managers/api/models/Book';
import { CLEAR_BOOKS, ClearBooksAction, GET_BOOKS_SUCCESS, GetBooksSuccessAction } from './booksActions';

export interface BooksState {
  readonly items: readonly Book[]
}

const initialState: BooksState = {
  items: []
}

export function booksReducer(
  state: BooksState = initialState,
  action: GetBooksSuccessAction | ClearBooksAction
): BooksState {
  switch (action.type) {
    case GET_BOOKS_SUCCESS: {
      return {
        ...state,
        items: action.payload
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
