import { AppThunkAction } from '../store';
import { ApiClient } from '../../managers/api/ApiClient';
import { Book } from '../../managers/api/models/Book';

// *** GET_BOOKS_SUCCESS *** //

export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS"

export interface GetBooksSuccessAction {
  type: typeof GET_BOOKS_SUCCESS,
  payload: readonly Book[]
}

function _getBooks(books: readonly Book[]): GetBooksSuccessAction {
  return {
    type: GET_BOOKS_SUCCESS,
    payload: books
  }
}

// *** GET_BOOKS *** //

export function getBooks(listNameEncode: string): AppThunkAction {
  return async (dispatch, getState) => {
    const books = await ApiClient.getBooks(listNameEncode)
    dispatch(_getBooks(books))
  }
}

// *** CLEAR_BOOKS *** //

export const CLEAR_BOOKS = "CLEAR_BOOKS"

export interface ClearBooksAction {
  type: typeof CLEAR_BOOKS,
  payload: undefined
}

export function clearBooks(): ClearBooksAction {
  return {
    type: CLEAR_BOOKS,
    payload: undefined
  }
}
