import { AppThunkAction } from '../store';
import { ApiClient } from '../../managers/api/ApiClient';
import { Book } from '../../managers/api/models/Book';
import { ReqState } from '../ReqState';

export type BooksAction = SetBooksReqStateAction | GetBooksSuccessAction | ClearBooksAction

// *** SET_BOOKS_REQ_STATE *** //

export const SET_BOOKS_REQ_STATE = "SET_BOOKS_REQ_STATE"

export interface SetBooksReqStateAction {
  type: typeof SET_BOOKS_REQ_STATE,
  payload: ReqState
}

function _setBooksReqState(reqState: ReqState): SetBooksReqStateAction {
  return {
    type: SET_BOOKS_REQ_STATE,
    payload: reqState
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
    dispatch(_setBooksReqState(ReqState.loading))
    try {
      const books = await ApiClient.getBooks(listNameEncode)
      dispatch(_getBooks(books))
    } catch {
      dispatch(_setBooksReqState(ReqState.error))
    }

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
