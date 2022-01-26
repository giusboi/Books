export const INCREMENT_ACTION = "INCREMENT_ACTION"

export interface IncrementAction {
  type: typeof INCREMENT_ACTION
  payload: undefined
}

export function increment(): IncrementAction {
  return {
    type: INCREMENT_ACTION,
    payload: undefined
  }
}
