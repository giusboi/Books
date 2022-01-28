import { AppThunkAction } from '../store';
import { ApiClient } from '../../managers/api/ApiClient';
import { Book } from '../../managers/api/models/Book';

export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS"

export interface GetBooksSuccess {
  type: typeof GET_BOOKS_SUCCESS,
  payload: readonly Book[]
}

function _getBooks(books: readonly Book[]): GetBooksSuccess {
  return {
    type: GET_BOOKS_SUCCESS,
    payload: books
  }
}

export function getBooks(listNameEncode: string): AppThunkAction {
  return async (dispatch, getState) => {
    const books = await ApiClient.getBooks(listNameEncode)
    dispatch(_getBooks(books))
  }
}
