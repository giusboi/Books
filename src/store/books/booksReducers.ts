import { Book } from '../../managers/api/models/Book';
import { BooksAction, CLEAR_BOOKS, SET_BOOKS_REQ_STATE, GET_BOOKS_SUCCESS } from './booksActions';
import { ReqState } from '../ReqState';

export interface BooksState {
  readonly items: readonly Book[]
  readonly reqState: ReqState
}

const initialState: BooksState = {
  items: [],
  reqState: ReqState.loading
}

export function booksReducer(
  state: BooksState = initialState,
  action: BooksAction
): BooksState {
  switch (action.type) {
    case SET_BOOKS_REQ_STATE: {
      return {
        ...state,
        reqState: action.payload
      }
    }
    case GET_BOOKS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        reqState: ReqState.success
      }
    }
    case CLEAR_BOOKS: {
      return {
        ...state,
        items: [],
        reqState: ReqState.loading
      }
    }
    default: {
      return state
    }
  }
}
