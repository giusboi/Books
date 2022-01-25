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
