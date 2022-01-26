import { AppThunkAction } from '../store';

export const INCREMENT_ACTION = "INCREMENT_ACTION"

// This is the action.
export interface IncrementAction {
  type: typeof INCREMENT_ACTION
  payload: undefined
}

// This is the action creator.
export function increment(): IncrementAction {
  return {
    type: INCREMENT_ACTION,
    payload: undefined
  }
}

export function incrementAfter(
  from: number,
  milliseconds: number
): AppThunkAction {
  return async (dispatch, getState) => {
    if (getState().counter.count < 10) {
      dispatch(increment())
      return
    }
    setTimeout(() => {
      dispatch(increment())
      console.log(getState().counter.count)
    }, milliseconds)
  }
}
