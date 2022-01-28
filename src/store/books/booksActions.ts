import { AppThunkAction } from '../store';
import { ApiClient } from '../../managers/api/ApiClient';
import { Book } from '../../managers/api/models/Book';

export type BooksAction = GetBooksLoadingAction | GetBooksSuccessAction | ClearBooksAction

// *** GET_BOOKS_LOADING *** //

export const GET_BOOKS_LOADING = "GET_BOOKS_LOADING"

export interface GetBooksLoadingAction {
  type: typeof GET_BOOKS_LOADING,
  payload: undefined
}

function _getBooksLoading(): GetBooksLoadingAction {
  return {
    type: GET_BOOKS_LOADING,
    payload: undefined
  }
}

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
    dispatch(_getBooksLoading())
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
